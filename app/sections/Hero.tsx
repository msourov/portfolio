import Button from '@/app/components/Button';

const Hero = () => (
  <section
    className="section-container xl:px-[124px] xl:py-28 xl:gap-4 motion-safe:opacity-0 motion-safe:animate-pop-in motion-safe:animation-delay-[1800ms]"
    data-testid="hero-section">
    <div className="text-accent flex items-center gap-2 group">
      <pre>Hi!</pre>
      <span className="group-hover:motion-safe:animate-wobble">👋</span>
      <pre>My name is</pre>
    </div>
    <h1 className="text-white leading-tight">Mahmud Hasan Sourov.</h1>
    <p className="sm:max-w-[500px] xl:max-w-[700px]">
      As a software developer, I&apos;m driven by the challenge of creating responsive, user-centric
      applications that solve real-world problems. My experience spans several sectors, from
      enhancing business productivity to innovating in e-commerce and crisis management. Skilled in
      crafting smooth, user-friendly frontend interfaces, with experience building robust, scalable
      backend systems.. As an independent contractor, I have the privilege of collaborating on
      complex projects where I can apply my full-stack expertise to deliver impactful, scalable
      solutions. My goal is to keep pushing boundaries, always with an eye towards creating
      meaningful solutions for users and businesses alike.
    </p>
    <Button className="mt-[32px]" href={process.env.resumeUrl || ''} target="_blank" download>
      Download my resume
    </Button>
  </section>
);

export default Hero;
