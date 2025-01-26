import SITEMAP from '@/constants/siteMap';
import { Link, Strong } from '@radix-ui/themes';
import React from 'react';

const Nav: React.FC = () => {
  return (
    <ul>
      {SITEMAP.map((link, id) => (
        <li key={id}>
          <Link target='_self' href={link.route}>
            <Strong>{link.label}</Strong>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
