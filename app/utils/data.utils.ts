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
    name: 'AidOps',
    type: '',
    description:
      'Developed a scalable real-time crisis management application using MVC architecture. Implemented RBAC, separate dashboards for different roles. Enabled volunteers to respond to crises, process donations, and manage inventory efficiently. ',
    // Enhanced system modularity and responsiveness, improving overall user engagement and operational efficiency.
    tech: ['Nodejs', 'Expressjs', 'MySQL', 'React', 'RTK Query', 'MantineUI'],
    image: '/featured/AidOps.png',
    links: {
      github: 'https://github.com/msourov/disaster-management',
      demo: '/',
    },
  },

  {
    name: 'HRTetris',
    type: '',
    description:
      'Developed a scalable HR application with Role-Based Access Control (RBAC) to securely manage administrators and employees. Integrated features such as ticketing support, automated payroll, resource allocation, overtime, and leave management to streamline operations.',
    // Enhanced user experience with intuitive dashboards and responsive design, increasing operational efficiency by 30% and boosting employee satisfaction.
    tech: ['ReactTS', 'MantineUI', 'Redux Toolkit', 'React Hook Form + zod'],
    image: '/featured/hrms.png',
    links: {
      github: 'https://github.com/msourov/HR-Tetris',
      demo: 'https://hr-tetris-pz34xajkh-st33lrabb1ts-projects.vercel.app',
    },
  },
  {
    name: 'Scents Orbit',
    type: '',
    description:
      'Developed a scalable e-commerce platform with multi-role support (admin, seller, customer), featuring KYC, editable RFQs with drafting, managing quotes, product, orders etc. ',
    tech: ['React', 'Redux', 'Axios', 'MaterialUI'],
    image: '/featured/scents-orbit.png',
    links: {
      github: 'https://github.com/Scents-Orbit/dashboard',
      demo: '',
    },
  },
  {
    name: 'Storybook',
    type: '',
    description:
      'A full-stack fully responsive story-telling platform using Next.js API routes and MongoDB, featuring Role-Based Access Control (RBAC). Users can post stories, like and comment on them, and share.',
    image: '/featured/storybook.png',
    links: { demo: '', github: 'https://github.com/msourov/story-craft' },
    tech: ['NextTS, MongoDB', 'MantineUI'],
  },
];

export const PROJECTS_DATA: Omit<ProjectInterface, 'image'>[] = [
  {
    name: 'Affectum Dashboard',
    type: 'Web App',
    description:
      'This site features a fully responsive dashboard template designed using dummy data.',
    links: {
      demo: 'https://affectum-dashboard-v1.vercel.app/',
      github: 'https://github.com/msourov/next14-concepts-showcase',
    },
    tech: ['React', 'MantineUI', 'Ant design', 'Vite'],
  },
  {
    name: 'Amvines Logistics',
    type: 'Web App',
    description:
      'Amvines Logistics landing page provides essential company information and a parcel tracking form for efficient shipment management.',
    links: {
      demo: 'https://www.amvinesbd.com/',
      github: 'https://github.com/msourov/amvines-landing-edit',
    },
    tech: ['React', 'Ant design', 'Axios'],
  },
  {
    name: 'Timeshell',
    type: 'Web App',
    description: 'Timeshell landing page displays company information.',
    links: {
      demo: 'https://timeshelldev.surge.sh/',
      github: 'https://github.com/Suvrakar/timeshell-app',
    },
    tech: ['React', 'Ant design', 'Axios'],
  },
  {
    name: 'Next14 concepts showcase',
    type: 'Web App',
    description:
      'A website to showcase nextjs SSR, SSG, ISR concepts using Unsplash API and Next14.',
    links: { demo: '', github: 'https://github.com/msourov/next14-concepts-showcase' },
    tech: ['Next14', 'Unsplash API', 'Vite'],
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
    label: 'NextJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    label: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
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
