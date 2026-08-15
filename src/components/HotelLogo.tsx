import React from 'react';

interface HotelLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const HotelLogo: React.FC<HotelLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`inline-flex items-center gap-3 text-right ${className}`}>
      {/* Luxury Royal SVG Emblem */}
      <div
        className={`${iconSize} rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 p-1.5 shadow-lg shadow-amber-500/20 border border-amber-300/50 shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-slate-950"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Royal Crown / Architectural Hotel Emblem */}
          {/* Five top stars */}
          <circle cx="50" cy="14" r="4" fill="#0f172a" />
          <circle cx="34" cy="18" r="3.2" fill="#0f172a" />
          <circle cx="66" cy="18" r="3.2" fill="#0f172a" />
          <circle cx="21" cy="25" r="2.5" fill="#0f172a" />
          <circle cx="79" cy="25" r="2.5" fill="#0f172a" />

          {/* Crown Peaks */}
          <path
            d="M20 42 L32 30 L50 22 L68 30 L80 42 L72 58 L28 58 Z"
            fill="#0f172a"
          />

          {/* Central Luxury Arch */}
          <path
            d="M38 58 L38 46 Q50 36 62 46 L62 58 Z"
            fill="#d97706"
          />

          {/* Pillars and Grand Base */}
          <rect x="24" y="62" width="52" height="6" rx="2" fill="#0f172a" />
          <rect x="28" y="71" width="44" height="4" rx="1.5" fill="#0f172a" />
          <rect x="20" y="78" width="60" height="7" rx="3" fill="#0f172a" />

          {/* Doorway / Portal */}
          <path
            d="M45 78 L45 68 Q50 64 55 68 L55 78 Z"
            fill="#fbbf24"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`${titleSize} font-extrabold tracking-tight text-white font-heading leading-tight`}
        >
          فندق ضواحي صنعاء
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSize} text-amber-400 font-medium tracking-wide flex items-center gap-1 mt-0.5`}
          >
            <span>SANAA SUBURBS HOTEL</span>
            <span className="text-amber-300 font-bold">•</span>
            <span className="text-[10px] text-slate-300">راحة وأناقة</span>
          </span>
        )}
      </div>
    </div>
  );
};
