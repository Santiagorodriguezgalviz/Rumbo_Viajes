type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  tone?: 'default' | 'light';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  tone = 'default',
}: Props) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const claro = tone === 'light';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${claro ? 'text-sun-300' : 'text-teal-600'}`}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-3 font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl ${
          claro ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${claro ? 'text-white/85' : 'text-ink-muted'}`}>{description}</p>
      )}
    </div>
  );
}
