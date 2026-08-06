import Image from "next/image";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Optional background photo behind the heading */
  image?: string;
  imageAlt?: string;
  /** Where the photo should be anchored, e.g. "50% 30%" */
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  imagePosition = "50% 35%",
}: Props) {
  return (
    <header className="relative overflow-hidden bg-ink grain pt-36 pb-20 sm:pt-40 sm:pb-24">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.28]"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
        </>
      )}
      <div className="absolute inset-0 spotlight" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {eyebrow && <p className="eyebrow text-brass mb-5">{eyebrow}</p>}
        <h1 className="font-display text-[2.6rem] leading-[1.06] sm:text-5xl md:text-6xl font-semibold text-ivory tracking-tight [text-shadow:0_3px_30px_rgba(0,0,0,0.6)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-9 h-[3px] w-16 rounded-full bg-gradient-to-r from-crimson-bright to-brass" />
      </div>
    </header>
  );
}
