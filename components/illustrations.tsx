export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 28c-16 0-22 10-38 10-19 0-32 16-32 38 0 17 6 27 10 46 4 20 8 50 24 50 14 0 12-32 20-32s6 32 20 32c16 0 20-30 24-50 4-19 10-29 10-46 0-22-13-38-32-38-16 0-22-10-38-10z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M78 74c6-8 14-12 22-12s16 4 22 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrbitRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="198" stroke="currentColor" strokeOpacity="0.12" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeOpacity="0.16" />
      <circle cx="200" cy="200" r="98" stroke="currentColor" strokeOpacity="0.2" />
    </svg>
  );
}

export function SparkleBurst({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2c1 8 3 13 5.5 15.5S32 20 38 20c-8 1-13 3-15.5 5.5S20 32 20 38c-1-8-3-13-5.5-15.5S8 20 2 20c8-1 13-3 15.5-5.5S20 8 20 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.5 20V12.8h2.2l.3-2.6h-2.5V8.6c0-.75.2-1.26 1.28-1.26h1.37V5.02C15.9 4.98 15.1 4.9 14.16 4.9c-1.96 0-3.3 1.2-3.3 3.4v1.9H8.6v2.6h2.26V20"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.2" cy="8.3" r="1.15" fill="currentColor" />
      <path d="M7.1 11h2.2v6.4H7.1z" fill="currentColor" />
      <path
        d="M11.4 11h2.1v.95c.4-.6 1.1-1.1 2.1-1.1 1.7 0 2.6 1.1 2.6 3v3.55h-2.2v-3.1c0-.85-.3-1.4-1.1-1.4-.6 0-1 .4-1.16.8-.06.15-.08.36-.08.58v3.12h-2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40C240 80 480 0 720 20C960 40 1200 80 1440 40V80H0V40Z"
        fill="currentColor"
      />
    </svg>
  );
}
