// MARK: Libs
import { useState } from 'react';
import { useAPIContext } from '@contexts/APIContext';

export default function useCharacters(): { state; actions } {
  const { API } = useAPIContext();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [comicsSample, setComicsSample] = useState<Comic[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGetLoading, setIsGetLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const [nameSearch, setNameSearch] = useState('');

  function reset(): void {
    setIsLoading(true);
    setIsGetLoading(false);
    setCharacters(null);
    setSelectedCharacter(null);
    setComicsSample(null);
  }

  function formatCharacter(
    data,
    thumbType?: 'portrait' | 'standard' | 'landscape',
  ): Character {
    let isExcelsior = false;
    const excelsiorTeam = JSON.parse(localStorage.getItem('EXCELSIOR_TEAM'));
    if (excelsiorTeam) {
      isExcelsior = !!excelsiorTeam.find(
        (character) => character.id === data.id,
      );
    }

    return {
      id: data.id,
      thumb: data.thumbnail?.path
        .concat(`/${thumbType}_incredible.`)
        .concat(data.thumbnail?.extension),
      name: data.name,
      description: data.description,
      isExcelsior,
    };
  }

  async function loadCharacters(): Promise<void> {
    reset();
    setOffset(0);

    try {
      let url = 'characters';
      if (nameSearch) {
        url = url.concat(`?nameStartsWith=${nameSearch}`);
      }

      const res = await API.get(url);
      const list = res.data.data.results.map((char) => {
        return formatCharacter(char, 'portrait');
      });
      setCharacters(list);
    } finally {
      setIsLoading(false);
    }
  }

  async function getCharacters(): Promise<void> {
    if (!characters || characters.length === 0) {
      return;
    }

    setIsGetLoading(true);

    try {
      let url = `characters?offset=${offset}`;
      if (nameSearch) {
        url = url.concat(`&nameStartsWith=${nameSearch}`);
      }

      const res = await API.get(url);
      const list = res.data.data.results.map((char) => {
        return formatCharacter(char, 'portrait');
      });
      setCharacters(characters.concat(list));
    } finally {
      setIsGetLoading(false);
    }
  }

  async function selectCharacter(id: number): Promise<void> {
    reset();
    try {
      const res = await API.get(`characters/${id}`);
      const selected = res.data.data.results[0];
      setSelectedCharacter(formatCharacter(selected, 'standard'));

      const comics = await API.get(`characters/${id}/comics?limit=5`);
      const sample = comics.data.data.results.map((comic) => ({
        id: comic.id,
        thumb: comic.thumbnail?.path
          .concat('/portrait_incredible.')
          .concat(comic.thumbnail.extension),
        title: comic.title,
        releaseDate: comic.dates?.find((date) => date?.type === 'focDate')
          ?.date,
        pageCount: comic.pageCount,
        price: comic.prices[0]?.price,
        description: comic.description,
      }));
      setComicsSample(sample);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    state: {
      isLoading,
      isGetLoading,
      offset,
      nameSearch,
      characters,
      selectedCharacter,
      comicsSample,
    },
    actions: {
      setOffset,
      setNameSearch,
      setCharacters,
      loadCharacters,
      getCharacters,
      selectCharacter,
    },
  };
}
