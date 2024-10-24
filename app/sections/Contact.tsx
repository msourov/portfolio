'use client';
import Button from '@/app/components/Button';
import SectionHeading from '@/app/components/SectionHeading';
import { TbMail } from 'react-icons/tb';
import { withEntranceAnimation } from '../components/EntranceWrapper';

const Contact = () => (
  <section className="section-container sm:gap-8" id="contact">
    <SectionHeading centered icon={TbMail}>
      Contact
    </SectionHeading>
    <div className="text-center max-w-[580px] mx-auto">
      <p>
        I’d love to hear from you! Whether you have a question about my services, need assistance,
        or just want to connect, feel free to reach out anytime. You can message me through social
        media or send a mail. I’m happy to help and will get back to you as soon as possible.
      </p>
      <Button href="mailto:mahmud.sv9@gmail.com" target="_blank" className="mt-8 mx-auto">
        Contact me via email
      </Button>
    </div>
  </section>
);

export default withEntranceAnimation(Contact);
