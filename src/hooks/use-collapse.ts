'use client';
import { CollapseContext } from '@/context/collapse';
import { handleError } from '@estarlincito/utils';

import { useContext } from 'react';

const useCollapse = () => {
  const collapseContext = useContext(CollapseContext);

  if (collapseContext === undefined) {
    handleError('Check if CollapseContext code is correct');
  }

  const { collapse, setCollapse } = collapseContext;

  const toggleCollapse = (): void => {
    setCollapse(!collapse);
  };

  return { collapse, toggleCollapse };
};

export default useCollapse;
