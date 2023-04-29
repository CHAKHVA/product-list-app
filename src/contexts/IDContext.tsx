import React from 'react';

interface IdsContextData {
  ids: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
  getProducts: () => void;
}

const IdsContext = React.createContext<IdsContextData>({
  ids: [],
  addId: () => {},
  removeId: () => {},
  getProducts: () => {}
});

export default IdsContext;
