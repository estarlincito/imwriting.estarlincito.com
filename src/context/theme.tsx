'use client';
import ChildrenProps from '@/types/children';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const AppThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
