import Link from 'next/link';
import { Plane } from 'lucide-react';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const isLight = tone === 'light';
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Rumbo Viajes, ir al inicio">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:-rotate-12 ${
          isLight ? 'bg-sun-400 text-navy-900' : 'bg-navy-800 text-sun-300'
        }`}
      >
        <Plane className="h-5 w-5 -rotate-45" aria-hidden="true" />
      </span>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        Rumbo <span className={isLight ? 'text-sun-300' : 'text-teal-600'}>Viajes</span>
      </span>
    </Link>
  );
}
