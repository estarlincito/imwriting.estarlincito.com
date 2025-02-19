'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { theme } from 'settings';

import Props from '@/types/children';

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
