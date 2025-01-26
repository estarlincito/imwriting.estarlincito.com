import { Metadata } from 'next';

interface SeoType {
  title: string;
  summary: string;
  route: string;
  publishedAt?: string;
  type?: 'article';
  authors?: string;
  img: { url: string; alt: string };
}

class SEO {
  seo: SeoType;

  metadata: Metadata;

  constructor(seo: SeoType) {
    this.seo = seo;
    this.metadata = {
      icons: {
        icon: 'https://imwriting.estarlincito.com/assets/favicons/favicon.ico',
        shortcut:
          'https://imwriting.estarlincito.com/assets/favicons/shortcut-icon.png',
      },
      title: this.seo.title,
      description: this.seo.summary,
      metadataBase: new URL('https://imwriting.estarlincito.com'),

      openGraph: {
        type: this.seo.type === undefined ? 'website' : this.seo.type,
        url: `${this.seo.route}`,
        publishedTime: this.seo.publishedAt ? this.seo.publishedAt : '',
        authors: this.seo.authors ? this.seo.authors : 'Estarlincito',
        title: this.seo.title,
        description: this.seo.summary,

        images: {
          url: this.seo.img.url,
          width: 800,
          height: 600,
          alt: this.seo.img.alt,
        },
        siteName: 'imwriting',
        locale: 'en-US',
      },
    };
  }
}

export default SEO;
