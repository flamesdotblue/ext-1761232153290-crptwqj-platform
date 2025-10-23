import { useEffect } from 'react';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import Process from './components/Process';
import CTA from './components/CTA';

export default function App() {
  useEffect(() => {
    // Inject Fredoka font for headings
    const id = 'fredoka-font-link';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-br from-red-400 to-zinc-900" />
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>NovaGrid Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
            <a href="#solutions" className="hover:text-zinc-900">Solutions</a>
            <a href="#process" className="hover:text-zinc-900">Process</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-4 py-2 hover:bg-zinc-800 transition">Get a Proposal</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <SolutionsGrid />
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-zinc-200/60 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} NovaGrid Labs. All rights reserved.</p>
          <div className="text-sm text-zinc-600">Built with modern Web & AI automation.</div>
        </div>
      </footer>
    </div>
  );
}
