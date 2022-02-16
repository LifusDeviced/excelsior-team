export interface CharactersContextInterface {
  isLoading?: boolean;
  isGetLoading?: boolean;
  offset?: number;
  nameSearch?: string;
  characters?: Character[] | null;
  selectedCharacter?: Character | null;
  comicsSample?: Comic[] | null;
  excelsiorTeam?: Character[];
  setNameSearch?: (value: string) => void;
  setOffset?: (value: number) => void;
  loadCharacters?: () => void;
  getCharacters?: () => void;
  selectCharacter?: (id: number) => void;
  getExcelsiorTeam?: () => void;
}
