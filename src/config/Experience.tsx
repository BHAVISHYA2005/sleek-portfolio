import AWS from '@/components/technologies/AWS';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'CNCF & Linux Foundation (Open Source)',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/oss-accent.png',
    description: [
      '**Argo CD:** Fixed gRPC-to-HTTP context propagation for distributed tracing (PR #24157); Jaeger and Zipkin now correlate traces across protocol boundaries.',
      '**Wolfi OS:** Diagnosed nginx-stable package corruption (PR #73306) and contributed additional packaging fixes for nftables and fontsproto.',
      '**Envoy Gateway:** Clarified ProxyAccessLogFormat docs for correct %REQ(:path)% usage (PR #6134).',
      '**Kubernetes SIG Headlamp:** Implemented validate-artifacthub CLI for ArtifactHub metadata (PR #3269).',
      '**FinVeda (GSSoC 2024):** Documentation improvements (PR #880) for contributor onboarding.',
    ],
    startDate: 'March 2025',
    endDate: 'Present',
    website: 'https://www.cncf.io/',
    github: 'https://github.com/bhavishyaaggarwal',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'GitHub',
        href: 'https://github.com/',
        icon: <Github />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
    ],
  },
];
