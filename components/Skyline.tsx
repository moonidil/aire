/**
 * Signature hero element: a thin, architectural line-drawing of a London
 * skyline silhouette. Stands in for a hero photograph until real property
 * photography is available — swap the whole <Hero> background treatment
 * for an <Image> later without losing the brand's line-art motif, which
 * can persist as a lightweight overlay above real photos.
 */
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {/* baseline */}
      <line x1="0" y1="400" x2="1440" y2="400" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />

      {/* distant low block skyline */}
      <path
        d="M0 400 V360 H60 V375 H140 V350 H220 V400 M240 400 V370 H300 V385 H360 V400"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <path
        d="M980 400 V365 H1040 V380 H1120 V355 H1200 V400 M1220 400 V372 H1290 V388 H1360 V400"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* The Shard — tapered spire */}
      <path
        d="M560 400 V220 L600 60 L640 220 V400"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.25"
      />

      {/* 30 St Mary Axe — gherkin outline */}
      <path
        d="M700 400 V240 C700 200 712 180 730 172 C748 180 760 200 760 240 V400"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.25"
      />

      {/* mid-rise blocks */}
      <path
        d="M420 400 V260 H480 V400 M800 400 V210 H820 V400 M820 400 V235 H865 V400"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.25"
      />

      {/* slender residential tower */}
      <path
        d="M900 400 V150 H930 V400"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.25"
      />
      <line x1="915" y1="150" x2="915" y2="130" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />

      {/* crane, small narrative detail */}
      <path
        d="M1080 400 V180 M1080 190 L1150 190 M1080 200 L1110 175"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {/* windows on the Shard, sparse */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1={575 + i * 2}
          y1={230 + i * 22}
          x2={625 - i * 2}
          y2={230 + i * 22}
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="0.75"
        />
      ))}
    </svg>
  );
}
