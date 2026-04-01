import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: heroConfig.name,
  /** Short site / brand name (Open Graph `site_name`, share previews). */
  title: 'Bhavishya',
  description: 'Software engineer · Backend, APIs, cloud-native systems',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '',
    github: 'bhavishyaaggarwal',
    linkedin: 'bhavishya-aggarwal',
    email: 'bhavishyaagg@gmail.com',
  },
  keywords: [
    'portfolio',
    'software engineer',
    'backend',
    'kubernetes',
    'open source',
    'CNCF',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description}`,
    keywords: [
      'portfolio',
      'developer',
      'backend',
      'open source',
      'kubernetes',
    ],
    ogImage: '/assets/bhavishya-profile.png',
    twitterCard: 'summary_large_image',
  },

  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      'Get in touch for collaborations, backend roles, or open source.',
    keywords: ['contact', 'hire', 'collaboration', 'backend', 'engineer'],
    ogImage: '/assets/bhavishya-profile.png',
    twitterCard: 'summary',
  },

  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Open source and engineering experience across CNCF ecosystems and product work.',
    keywords: ['work experience', 'open source', 'CNCF', 'software engineer'],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects',
    description:
      'Invoicing, screen-time tracking, and on-call tooling — full-stack and backend projects.',
    keywords: ['projects', 'portfolio', 'Next.js', 'Python', 'PostgreSQL'],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description: 'Notes on engineering, programming, and web development.',
    keywords: ['blog', 'tutorials', 'programming', 'web development'],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  '/resume': {
    title: 'Resume - Professional CV',
    description: `Résumé and CV for ${about.name}.`,
    keywords: ['resume', 'cv', 'backend', 'open source'],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  '/gears': {
    title: 'Gears - My Setup & Tools',
    description: 'Tools, devices, and software I use for development.',
    keywords: ['setup', 'tools', 'development environment'],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  '/setup': {
    title: 'Setup Guide - VS Code Configuration',
    description: 'VS Code configuration, extensions, and fonts.',
    keywords: ['vscode', 'setup', 'extensions', 'guide'],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  const twitterCreator = siteConfig.author.twitter
    ? siteConfig.author.twitter
    : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      ...(twitterCreator ? { creator: twitterCreator } : {}),
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
