import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import AWS from '@/components/technologies/AWS';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  AWS: AWS,
};

export const heroConfig = {
  name: 'Bhavishya',
  title: 'Software Engineer.',
  avatar: '/assets/bhavishya-profile.png',

  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      component: 'AWS',
    },
  ],

  description: {
    template:
      'Backend engineer building **API-driven** services and **cloud-native** workloads with {skills:0}, {skills:1}, and {skills:2}. I also work with {skills:3}, {skills:4}, **Go**, **Python**, **Kubernetes**, and **Docker** in production.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhavishya-aggarwal/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/bhavishyaaggarwal',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:bhavishyaagg@gmail.com',
    icon: <Mail />,
  },
];
