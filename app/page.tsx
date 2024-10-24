import { Metadata } from 'next';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Featured from './sections/Featured';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const metaTitle = 'Mahmud Hasan Sourov | Software Engineer';
const metaDescription = `Mahmud Hasan Sourov is a Software Engineer who crafts unique customized software solutions and digital experiences that solve real-world problems.`;

const metaOgImages = [
  {
    url: 'https://yourdomain.com/',
    width: 1200,
    height: 630,
    alt: metaTitle,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com/'),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    'Mahmud Hasan Sourov',
    'Mahmud Hasan',
    'Software Developer',
    'Software',
    'Engineer',
    'Full Stack',
    'Full Stack Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: metaTitle,
    description: metaDescription,
    images: metaOgImages,
  },
  twitter: {
    site: '',
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: metaOgImages,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Featured />
      <Projects />
      <Contact />
    </>
  );
}
