'use client';
import { CollapseContext } from '@/context/collapse';
import handleError from '@/lib/handle-error';
import { useContext } from 'react';

type Return = { collapse: boolean; togleCollapse: () => void };

const useCollapse = (): Return => {
  const collapseContext = useContext(CollapseContext);

  if (collapseContext === undefined) {
    handleError('Check if CollapseContext code is corret');
  }

  const { collapse, setCollapse } = collapseContext;

  const togleCollapse = (): void => {
    setCollapse(!collapse);
  };

  return { collapse, togleCollapse };
};

export default useCollapse;
