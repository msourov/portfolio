// istanbul ignore file
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ExperienceInterface, ProjectInterface } from '../interfaces/project.interface';

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Pitetris',
    content: {
      position: 'Frontend Developer',
      period: 'June 2024 - Present',
      items: [
        'Responsible for the development of diverse projects across multiple domains.',
        'Utilize modern technologies and best practices to deliver high-quality production code that meets project requirements.',
        'Collaborate with cross-functional teams to create smooth web experiences for users.',
      ],
    },
  },
  {
    title: 'Hidayah Smart Solutions',
    content: {
      position: 'Assistant Software Engineer',
      period: 'October 2023 - May 2024',
      items: [
        'Contributed to development of a logistics and operations management system consisting of Admin, Warehouse, and Merchant management.',
        'Enhanced real-time tracking and optimized logistics and warehousing processes.',
        'Built NurseLink for efficient task distribution across hospital wards and cabins.',
      ],
    },
  },
];

export const FEATURED_PROJECTS_DATA: ProjectInterface[] = [
  {
    name: 'Disaster Management',
    type: '',
    description:
      'Built a real-time crisis response system featuring RBAC to manage admin, volunteers and visitors using Express, MySQL,and React enabling volunteers to view and respond to crises, donate and manage inventory. Applied MVC architecture for scalability and modularity',
    tech: ['Nodejs', 'Expressjs', 'MySQL', 'React', 'RTK Query', 'MantineUI'],
    image: '/featured/portfolio.webp',
    links: {
      github: 'https://github.com/msourov/disaster-management',
      demo: '/',
    },
  },
  {
    name: 'HRTetris',
    type: '',
    description:
      'Developed an HR management solution with features like RBAC for admin and employee management, ticketing, payroll, resource allocation etc.',
    tech: ['ReactTS', 'MantineUI', 'Redux Toolkit', 'React Hook Form + zod'],
    image: '/featured/wholesale.webp',
    links: {
      github: 'https://github.com/msourov/HR-Tetris',
      demo: '',
    },
  },
  {
    name: 'Scents Orbit',
    type: '',
    description:
      'Developed a scalable e-commerce platform with multi-role support (admin, seller, customer), featuring KYC, editable RFQs with drafting, managing quotes, product, orders etc. ',
    tech: ['React', 'Redux', 'Axios', 'MaterialUI'],
    image: '/featured/petplant.webp',
    links: {
      github: 'https://github.com/Scents-Orbit/dashboard',
      demo: '',
    },
  },
];

export const PROJECTS_DATA: Omit<ProjectInterface, 'image'>[] = [
  {
    name: 'Minigrep',
    type: 'CLI',
    description:
      'A very simple implementation of the basic functionality of the grep command-line tool using Rust.',
    links: { demo: '', github: 'https://github.com/jhonny9550/minigrep' },
    tech: ['Rust'],
  },
  {
    name: 'Bingo Game',
    type: 'Web App',
    description: 'A bingo game that you can play with your friends.',
    links: { demo: '', github: 'https://github.com/jhonny9550/bingo-game' },
    tech: ['React', 'TailwindCSS', 'Vite', 'AWS'],
  },
];

export const TECH_STACK_DATA: { label: string; icon: string }[] = [
  {
    label: 'JavaScript (ES6+)',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    label: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    label: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
  },
  {
    label: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    label: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },
  {
    label: 'NextJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    label: 'NodeJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    label: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    label: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    label: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },

  // 'TypeScript',
  // 'React',
  // 'Redux',
  // 'NodeJS',
  // 'NextJS',
];

export const SOCIAL_MEDIA_DATA: { icon: IconType; link: string; label: string }[] = [
  {
    link: 'https://github.com/msourov',
    icon: FaGithub,
    label: 'Github',
  },
  {
    link: 'https://www.linkedin.com/in/mahmud-hasan-sourov-06bbb0168/',
    icon: FaLinkedin,
    label: 'Linkedin',
  },
  {
    link: 'https://www.hackerrank.com/profile/sourov1666',
    icon: FaHackerrank,
    label: 'Hackerrank',
  },
  {
    link: 'https://leetcode.com/u/steelRabbit/',
    icon: SiLeetcode,
    label: 'Leetcode',
  },
];
