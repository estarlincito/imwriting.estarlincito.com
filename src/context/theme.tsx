'use client';
import Props from '@/types/children';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
