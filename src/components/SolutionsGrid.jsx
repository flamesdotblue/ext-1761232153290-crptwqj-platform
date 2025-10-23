import { useEffect, useRef } from 'react';
import { Rocket, Bot, Cpu, Shield, Sparkles, LineChart } from 'lucide-react';

const cards = [
  {
    icon: Rocket,
    title: 'High-Impact Websites',
    text: 'Fast, accessible, conversion-focused web apps with modern stacks.',
    accent: 'from-red-400 to-rose-500',
  },
  {
    icon: Bot,
    title: 'AI Assistants & Agents',
    text: 'Automate support, ops, and lead gen with reliable AI systems.',
    accent: 'from-amber-400 to-red-400',
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    text: 'Connect tools and remove manual work with robust pipelines.',
    accent: 'from-violet-400 to-indigo-500',
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    text: 'Dashboards, attribution, and decision-ready insights.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    text: 'Testing, monitoring, and SLOs baked into delivery.',
    accent: 'from-sky-400 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Growth Experiments',
    text: 'A/B tests and rapid iteration to move key metrics.',
    accent: 'from-fuchsia-400 to-pink-500',
  },
];

export default function SolutionsGrid() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

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
            autoAlpha: 0,
            y: 24,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          });
          gsap.from(itemsRef.current, {
            autoAlpha: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          });
        }, sectionRef);
      } catch {}
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-red-50/60 to-transparent rounded-b-[40%]" />

      <div className="relative flex flex-col items-center text-center mb-12">
        <h2 data-title className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>
          Solutions that compound impact
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-700">
          We combine modern web engineering with pragmatic AI automation to deliver measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <article
            key={c.title}
            ref={(el) => (itemsRef.current[i] = el)}
            className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-zinc-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          >
            <div className={`absolute -right-8 -top-8 size-28 rounded-full bg-gradient-to-br ${c.accent} opacity-20 blur-2xl`} />
            <div className="flex items-center gap-4">
              <div className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-inner shadow-white/10`}>
                <c.icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>{c.title}</h3>
                <p className="text-sm text-zinc-600">{c.text}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-zinc-600">
              <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Discovery & KPIs</div>
              <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Design & Build</div>
              <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Launch & Measure</div>
              <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-200">Iterate & Scale</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
