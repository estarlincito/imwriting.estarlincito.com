import ChildrenProps from '@/types/children';
import React from 'react';

const Empty: React.FC<ChildrenProps> = ({ children }) => {
  return <>{children}</>;
};

export default Empty;
