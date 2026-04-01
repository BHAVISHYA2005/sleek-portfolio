export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  /** Shown beside the logo; keep short for the header. */
  siteTitle: 'Bhavishya',
  logo: {
    src: '/assets/bhavishya-profile.png',
    alt: 'Bhavishya',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
