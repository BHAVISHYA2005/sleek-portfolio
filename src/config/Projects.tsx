import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'BharatBills',
    description:
      'GST-compliant invoicing for Indian small businesses: CGST/SGST/IGST engine, GSTIN validation, Next.js APIs with Prisma and PostgreSQL, JWT auth and Vercel deployment.',
    image: '/project/bharatbills.png',
    link: 'https://github.com/bhavishyaaggarwal',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhavishyaaggarwal',
    live: 'https://github.com/bhavishyaaggarwal',
    details: false,
    projectDetailsPageSlug: '/projects/bharatbills',
    isWorking: true,
  },
  {
    title: 'DadClock',
    description:
      'Screen-time tracking with Next.js and Supabase (PostgreSQL): usage aggregation, per-app stats, RLS for multi-account isolation, email verification, Vercel deployment.',
    image: '/project/dadclock.png',
    link: 'https://github.com/bhavishyaaggarwal',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhavishyaaggarwal',
    live: 'https://github.com/bhavishyaaggarwal',
    details: false,
    projectDetailsPageSlug: '/projects/dadclock',
    isWorking: true,
  },
  {
    title: 'Portia Oncall Agent',
    description:
      'Python/Flask service for log triage: detects recurring production errors, suggests remediation, Slack notifications, REST API with human-in-the-loop approvals and audit logging.',
    image: '/project/portia-oncall.png',
    link: 'https://github.com/bhavishyaaggarwal',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/bhavishyaaggarwal',
    live: 'https://github.com/bhavishyaaggarwal',
    details: false,
    projectDetailsPageSlug: '/projects/portia-oncall',
    isWorking: false,
  },
];
