import React from 'react';

interface IdsContextData {
  ids: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

const IdsContext = React.createContext<IdsContextData>({
  ids: [],
  addId: () => {},
  removeId: () => {}
});

export default IdsContext;
