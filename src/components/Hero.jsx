import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);

  useEffect(() => {
    let ctx;
    let gsapMod = null;
    let stMod = null;
    (async () => {
      try {
        const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
          import('https://cdn.skypack.dev/gsap'),
          import('https://cdn.skypack.dev/gsap/ScrollTrigger'),
        ]);
        gsap.registerPlugin(ScrollTrigger);
        gsapMod = gsap;
        stMod = ScrollTrigger;

        ctx = gsap.context(() => {
          gsap.from(headlineRef.current, { y: 20, autoAlpha: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 });
          gsap.from(subRef.current, { y: 16, autoAlpha: 0, duration: 0.8, ease: 'power3.out', delay: 0.25 });
          gsap.from(ctasRef.current, { y: 12, autoAlpha: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 });
        }, containerRef);
      } catch (e) {
        // Fallback silently if CDN unavailable
      }
    })();

    return () => {
      try {
        ctx && ctx.revert();
        if (stMod && stMod.getAll) stMod.getAll().forEach((i) => i.kill());
        if (gsapMod && gsapMod.killTweensOf) {
          gsapMod.killTweensOf(headlineRef.current);
          gsapMod.killTweensOf(subRef.current);
          gsapMod.killTweensOf(ctasRef.current);
        }
      } catch {}
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.6),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200">
          <span className="size-2 rounded-full bg-red-500" />
          Web Development & AI Automation
        </span>
        <h1 ref={headlineRef} className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>
          Ship delightful digital products powered by intelligent automation
        </h1>
        <p ref={subRef} className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-700">
          We design, build, and automate modern web experiences that increase revenue, reduce costs, and move metrics that matter.
        </p>
        <div ref={ctasRef} className="mt-9 flex flex-col sm:flex-row gap-3">
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-6 py-3 font-medium hover:bg-zinc-800 transition">
            Get a Free Strategy Call
          </a>
          <a href="#solutions" className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 ring-1 ring-zinc-200 px-6 py-3 font-medium hover:bg-zinc-50 transition">
            Explore Solutions
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-90">
          {[
            { k: 'metric1', label: 'Avg. +38% conversion', note: 'after redesign & CRO' },
            { k: 'metric2', label: 'Up to 120h/month saved', note: 'with automation' },
            { k: 'metric3', label: '99.9% uptime', note: 'scalable infra' },
            { k: 'metric4', label: 'NPS 72', note: 'client satisfaction' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-white/70 backdrop-blur p-4 ring-1 ring-zinc-200">
              <div className="text-sm font-semibold text-zinc-900" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>{m.label}</div>
              <div className="text-xs text-zinc-600">{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
