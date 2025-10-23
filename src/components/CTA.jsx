import { useEffect, useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef(null);

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
          gsap.from(sectionRef.current.querySelectorAll('[data-animate]'), {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          });
        }, sectionRef);
      } catch {}
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-50 to-transparent" />
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 text-white p-10 md:p-14">
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-red-500/30 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 size-40 rounded-full bg-rose-500/30 blur-3xl" />
        <div data-animate className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">
          Limited slots this month
          <span className="size-2 rounded-full bg-red-400" />
        </div>
        <h3 data-animate className="mt-5 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>
          Ready to unlock growth with Web & AI automation?
        </h3>
        <p data-animate className="mt-3 text-zinc-300 max-w-2xl">
          Book a free strategy call. We’ll audit your funnel, identify automation wins, and propose a tailored roadmap.
        </p>
        <div data-animate className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-6 py-3 font-medium hover:bg-zinc-100 transition">
            Book Strategy Call
          </a>
          <a href="#solutions" className="inline-flex items-center justify-center rounded-full bg-transparent text-white ring-1 ring-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">
            View Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
