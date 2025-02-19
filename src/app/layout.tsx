import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import React from 'react';
import { locale } from 'settings';

import Footer from '@/components/layout//footer';
import Navbar from '@/components/layout/navbar';
import { CollapseProvider } from '@/context/collapse';
import AppThemeProvider from '@/context/theme';
import Toaster from '@/lib/toaster';
import Props from '@/types/children';

const RootLayout = (props: Props) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Theme accentColor='sky' radius='full'>
          <CollapseProvider>
            <Navbar />
            {props.children}
            <AppThemeProvider>
              <Footer />
            </AppThemeProvider>
          </CollapseProvider>
        </Theme>

        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              background: 'black',
              color: 'white',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
