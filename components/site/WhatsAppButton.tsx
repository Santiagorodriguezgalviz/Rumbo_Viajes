import { MessageCircle } from 'lucide-react';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'whatsapp' | 'light' | 'navy';
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  whatsapp: 'bg-whatsapp text-navy-900 hover:bg-[#1fbc59] shadow-lg shadow-whatsapp/25',
  light: 'bg-white text-navy-800 hover:bg-sun-100 shadow-lg shadow-black/20',
  navy: 'bg-navy-800 text-white hover:bg-navy-700 shadow-lg shadow-navy-900/20',
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  lg: 'h-14 px-7 text-base',
};

export function WhatsAppButton({
  href,
  children,
  variant = 'whatsapp',
  size = 'lg',
  className = '',
  onClick,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/40 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100 motion-reduce:hidden"
      />
      <MessageCircle className="relative h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="relative">{children}</span>
    </a>
  );
}
