import { useEffect, useRef } from 'react';

const steps = [
  {
    title: 'Define Outcomes',
    text: 'We align on business goals, constraints, and success metrics to prioritize impact.',
  },
  {
    title: 'Design & Prototype',
    text: 'User-centered design with rapid prototyping to validate critical assumptions.',
  },
  {
    title: 'Build & Automate',
    text: 'Implement reliable systems with code quality, testing, and scalable infra.',
  },
  {
    title: 'Measure & Scale',
    text: 'Track KPIs, iterate quickly, and scale what works across your org.',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      try {
        const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
          import('https://cdn.skypack.dev/gsap'),
          import('https://cdn.skypack.dev/gsap/ScrollTrigger'),
        ]);
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.from(sectionRef.current.querySelector('[data-title]'), {
            autoAlpha: 0, y: 20, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          });
          gsap.from(stepRefs.current, {
            autoAlpha: 0, y: 30, duration: 0.7, ease: 'power3.out', stagger: 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          });
        }, sectionRef);
      } catch {}
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute left-1/2 top-10 -z-[1] -translate-x-1/2 h-72 w-[90%] rounded-[48px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(244,63,94,0.08),rgba(244,63,94,0)_60%)]" />

      <div className="relative mb-12 text-center">
        <h2 data-title className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>
          A process built for results
        </h2>
        <p className="mt-4 text-zinc-700 max-w-2xl mx-auto">
          Clear steps, measurable outcomes, continuous iteration. No fluff.
        </p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-400/50 via-zinc-200 to-transparent" />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} ref={(el) => (stepRefs.current[i] = el)} className="relative pl-10">
                <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-full bg-white ring-2 ring-red-400/60 text-red-500 font-semibold">{i + 1}</span>
                <h3 className="text-xl font-semibold text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>{s.title}</h3>
                <p className="text-zinc-700 text-sm mt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative rounded-2xl bg-white p-6 ring-1 ring-zinc-200 overflow-hidden">
          <div className="absolute right-[-60px] bottom-[-60px] size-60 rounded-full bg-gradient-to-br from-rose-200 to-red-200 blur-3xl" />
          <h4 className="text-lg font-semibold text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>What you get</h4>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700">
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Roadmap aligned to KPIs</li>
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Design system & components</li>
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Automations w/ monitoring</li>
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Analytics & growth experiments</li>
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Documentation & training</li>
            <li className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Post-launch optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
