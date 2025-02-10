'use client';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Badge, Box, Button, Flex } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
const ThemeTogle: React.FC = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  //Ensure the component is only rendered after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <Flex gapX='2'>
      <Box p='3' asChild>
        <Badge radius='small' variant='outline' color='gray'>
          <Button
            onClick={() => {
              setTheme('light');
            }}
            disabled={theme === 'light' && true}
            variant='outline'
          >
            <SunIcon /> Light
          </Button>
          <Button
            onClick={() => {
              setTheme('system');
            }}
            disabled={theme === 'system' && true}
            variant='outline'
          >
            <DesktopIcon /> System
          </Button>
          <Button
            onClick={() => {
              setTheme('dark');
            }}
            disabled={theme === 'dark' && true}
            variant='outline'
          >
            <MoonIcon /> Dark
          </Button>
        </Badge>
      </Box>
    </Flex>
  );
};

export default ThemeTogle;
