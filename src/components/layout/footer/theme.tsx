'use client';
import { Flex, type IconProps, SegmentedControl } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

interface Props {
  value: 'light' | 'dark' | 'system';
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}
const Item = ({ value, Icon }: Props) => {
  return (
    <SegmentedControl.Item value={value}>
      <Flex align='center' gap='1'>
        <Icon />
        {value.replace(value[0], value[0].toUpperCase())}
      </Flex>
    </SegmentedControl.Item>
  );
};
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  //Ensure the component is only rendered after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <SegmentedControl.Root
      defaultValue={theme}
      radius='small'
      onValueChange={(value) => {
        setTheme(value);
      }}
    >
      <Item value='light' Icon={SunIcon} />
      <Item value='system' Icon={DesktopIcon} />
      <Item value='dark' Icon={MoonIcon} />
    </SegmentedControl.Root>
  );
};

export default ThemeToggle;
