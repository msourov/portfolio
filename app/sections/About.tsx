'use client';

import SectionHeading from '@/app/components/SectionHeading';
import { TECH_STACK_DATA } from '@/app/utils/data.utils';
import Image from 'next/image';
import { TbUser } from 'react-icons/tb';
import { withEntranceAnimation } from '../components/EntranceWrapper';

const About = () => (
  <div className="section-container xl:px-[220px] " data-testid="about-section" id="about">
    <SectionHeading icon={TbUser}>About me</SectionHeading>
    <div className="flex flex-col-reverse items-center gap-20 xl:flex-row">
      <div className="flex flex-col gap-6">
        <p>
          My name is Mahmud Hasan Sourov, and I graduated with a BSc in Computer Science and
          Engineering from United International University.
        </p>
        <p>
          Currently, I am working as an independent contractor for a company, providing full-stack
          web development services. I ensure consistent, reliable performance and deliver customized
          solutions that meet user demands.
        </p>

        <p>My tech stack:</p>
        <ul className="bullet-list font-mono grid grid-cols-2 gap-y-3.5 gap-x-2 xl:gap-x-14">
          {TECH_STACK_DATA.map(tech => (
            <li key={tech.label} className="flex items-center">
              <Image src={tech.icon} alt="3DS Max Icon" width={25} height={25} />
              <span className="ml-2 text-lg">{tech.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-2/3 h-2/3 aspect-square overflow-hidden rounded-full">
        <Image
          height={250}
          width={250}
          src="/me.jpg"
          alt="My picture"
          className="object-cover w-full h-full"
          sizes="(max-width: 568px) 80vw, 450px"
        />
      </div>
    </div>
  </div>
);

export default withEntranceAnimation(About);
