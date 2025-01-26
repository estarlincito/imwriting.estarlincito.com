import Footer from '@/components/layout//footer';
import Navbar from '@/components/layout//navbar';
import Collapse from '@/components/layout/collapse';
import Opacity from '@/components/opacity';
import { CollapseProvider } from '@/context/collapse';
import AppThemeProvider from '@/context/theme';
import Toaster from '@/lib/toaster';
import '@/styles/themes-config.css';
import Props from '@/types/children';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React from 'react';

const RootLayout: React.FC<Props> = (props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='sky' radius='full'>
          <CollapseProvider>
            <Opacity />
            <AppThemeProvider>
              <Navbar />
              <Collapse />
            </AppThemeProvider>
            {props.children}
            <Footer />
          </CollapseProvider>
        </Theme>

        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              color: 'white',
              background: 'black',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
