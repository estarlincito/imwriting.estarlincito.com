'use client';
import { CollapseContext } from '@/context/collapse';
import { useContext } from 'react';

type Return = { collapse: boolean; togleCollapse: () => void };

const useCollapse = (): Return => {
  const collapseContext = useContext(CollapseContext);

  if (collapseContext === undefined) {
    throw new Error('Check if CollapseContext code is corret');
  }

  const { collapse, setCollapse } = collapseContext;

  const togleCollapse = (): void => {
    setCollapse(!collapse);
  };

  return { collapse, togleCollapse };
};

export default useCollapse;
