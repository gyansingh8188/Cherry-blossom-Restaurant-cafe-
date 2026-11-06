import React from 'react';

interface CherryPetalsProps {
  enabled?: boolean;
}

export const CherryPetals: React.FC<CherryPetalsProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  // 12 gently drifting petals with randomized positions and delays
  const petals = [
    { left: '5%', delay: '0s', duration: '14s', size: 14 },
    { left: '15%', delay: '3s', duration: '16s', size: 18 },
    { left: '28%', delay: '7s', duration: '15s', size: 12 },
    { left: '42%', delay: '1.5s', duration: '18s', size: 16 },
    { left: '55%', delay: '5s', duration: '13s', size: 14 },
    { left: '68%', delay: '9s', duration: '17s', size: 15 },
    { left: '78%', delay: '2.5s', duration: '14s', size: 13 },
    { left: '88%', delay: '6s', duration: '19s', size: 17 },
    { left: '94%', delay: '11s', duration: '15s', size: 12 },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-10"
      aria-hidden="true"
    >
      {petals.map((p, idx) => (
        <div
          key={idx}
          className="absolute -top-10 opacity-60"
          style={{
            left: p.left,
            animation: `petal-float ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            className="text-[#F3C7D2] drop-shadow-xs"
          >
            <path
              d="M12 0 C18 8 24 18 16 30 C12 32 10 32 8 30 C0 18 6 8 12 0 Z"
              fill="currentColor"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
