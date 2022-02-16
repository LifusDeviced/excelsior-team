import { createContext, useContext } from 'react';
import useAPI from '../../hooks/useAPI';
import { APIContextInterface } from './interface';

const APIContext = createContext<APIContextInterface>({});

function useAPIContext(): APIContextInterface {
  const context = useContext(APIContext);
  if (!context) {
    throw new Error('useAPIContext must be used within an APIProvider.');
  }
  return context;
}

const APIProvider = (props: { children }): JSX.Element => {
  const { children } = props;
  const { API } = useAPI();

  return <APIContext.Provider value={{ API }}>{children}</APIContext.Provider>;
};

export { APIProvider, useAPIContext };
