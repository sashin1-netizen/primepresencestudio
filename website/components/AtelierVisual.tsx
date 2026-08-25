type Variant = "identity" | "digital" | "process" | "contact" | "connect" | "archive";

export default function AtelierVisual({ variant, label }: { variant: Variant; label?: string }) {
  return (
    <div className="relative overflow-hidden border border-white/[.08] bg-[#060504] shadow-[0_30px_90px_rgba(0,0,0,.38)]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(201,154,60,.12),transparent_30%),linear-gradient(160deg,rgba(255,255,255,.02),transparent_45%)]" />
      <svg viewBox="0 0 800 620" className="relative block h-auto w-full" role="img" aria-label={label || `${variant} visual composition`}>
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f2d27e"/><stop offset=".55" stopColor="#c99a3c"/><stop offset="1" stopColor="#7e5b20"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="rgba(255,255,255,.08)"/><stop offset="1" stopColor="rgba(255,255,255,.01)"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="800" height="620" fill="#050403"/>
        <circle cx="665" cy="118" r="175" fill="none" stroke="#c99a3c" strokeOpacity=".08"/>
        <circle cx="665" cy="118" r="120" fill="none" stroke="#fff" strokeOpacity=".035"/>
        <path d="M0 510 C180 430 260 580 430 500 S680 420 800 500" fill="none" stroke="#c99a3c" strokeOpacity=".09"/>
        {variant === "identity" && <>
          <rect x="88" y="120" width="330" height="205" rx="6" fill="#0a0907" stroke="#d2a64a" strokeOpacity=".35" transform="rotate(-6 253 222)"/>
          <rect x="135" y="165" width="238" height="2" fill="url(#gold)" opacity=".9" transform="rotate(-6 254 166)"/>
          <text x="158" y="220" fill="#f2eadf" fontFamily="Georgia,serif" fontSize="31" letterSpacing="4" transform="rotate(-6 158 220)">PRIME PRESENCE</text>
          <text x="160" y="252" fill="#c99a3c" fontFamily="Arial,sans-serif" fontSize="12" letterSpacing="6" transform="rotate(-6 160 252)">ATELIER</text>
          <rect x="360" y="255" width="285" height="190" rx="4" fill="#0c0b09" stroke="#fff" strokeOpacity=".08" transform="rotate(7 500 350)"/>
          <circle cx="495" cy="345" r="42" fill="none" stroke="url(#gold)" strokeWidth="2"/>
          <path d="M480 345h30M495 330v30" stroke="#c99a3c" strokeWidth="1.4" opacity=".8"/>
          <rect x="120" y="400" width="260" height="16" rx="8" fill="#c99a3c" opacity=".13"/>
          <rect x="120" y="430" width="180" height="8" rx="4" fill="#fff" opacity=".06"/>
        </>}
        {variant === "digital" && <>
          <rect x="90" y="90" width="620" height="390" rx="18" fill="#090806" stroke="#c99a3c" strokeOpacity=".24"/>
          <rect x="116" y="118" width="568" height="42" rx="8" fill="#0e0d0a"/>
          <circle cx="142" cy="139" r="4" fill="#c99a3c"/><circle cx="158" cy="139" r="4" fill="#fff" opacity=".18"/><circle cx="174" cy="139" r="4" fill="#fff" opacity=".09"/>
          <rect x="126" y="194" width="228" height="22" rx="11" fill="url(#gold)" opacity=".9"/>
          <rect x="126" y="232" width="300" height="14" rx="7" fill="#fff" opacity=".1"/>
          <rect x="126" y="260" width="260" height="14" rx="7" fill="#fff" opacity=".065"/>
          <rect x="126" y="318" width="148" height="52" rx="4" fill="#c99a3c" opacity=".15" stroke="#c99a3c" strokeOpacity=".45"/>
          <rect x="455" y="190" width="180" height="228" rx="10" fill="#0b0a08" stroke="#fff" strokeOpacity=".08"/>
          <rect x="480" y="220" width="130" height="98" rx="6" fill="url(#glass)"/>
          <circle cx="545" cy="269" r="30" fill="none" stroke="#c99a3c" strokeOpacity=".45"/>
          <rect x="480" y="342" width="100" height="10" rx="5" fill="#fff" opacity=".09"/>
          <rect x="480" y="366" width="82" height="10" rx="5" fill="#fff" opacity=".055"/>
        </>}
        {variant === "process" && <>
          <path d="M120 340 C200 180 330 180 410 310 S620 480 700 230" fill="none" stroke="url(#gold)" strokeWidth="2" opacity=".55"/>
          {[{x:135,y:322,n:"01"},{x:260,y:218,n:"02"},{x:390,y:286,n:"03"},{x:520,y:394,n:"04"},{x:685,y:246,n:"05"}].map((p)=><g key={p.n}><circle cx={p.x} cy={p.y} r="28" fill="#080705" stroke="#c99a3c" strokeOpacity=".45"/><text x={p.x} y={p.y+4} textAnchor="middle" fill="#e2b85d" fontSize="11" fontFamily="Arial" letterSpacing="2">{p.n}</text></g>)}
          <rect x="85" y="92" width="220" height="74" rx="5" fill="#0b0a08" stroke="#fff" strokeOpacity=".08"/>
          <rect x="108" y="114" width="130" height="8" rx="4" fill="#fff" opacity=".1"/><rect x="108" y="136" width="168" height="8" rx="4" fill="#fff" opacity=".055"/>
          <rect x="475" y="92" width="240" height="96" rx="5" fill="#0b0a08" stroke="#c99a3c" strokeOpacity=".18"/>
          <rect x="500" y="116" width="90" height="12" rx="6" fill="#c99a3c" opacity=".24"/><rect x="500" y="146" width="168" height="8" rx="4" fill="#fff" opacity=".07"/>
        </>}
        {variant === "contact" && <>
          <rect x="100" y="88" width="600" height="430" rx="14" fill="#090806" stroke="#c99a3c" strokeOpacity=".18"/>
          <rect x="132" y="128" width="226" height="20" rx="10" fill="url(#gold)" opacity=".8"/>
          <rect x="132" y="172" width="450" height="1" fill="#fff" opacity=".08"/>
          {[0,1,2].map(i=><g key={i}><rect x="132" y={210+i*76} width="220" height="46" rx="3" fill="#0d0c09" stroke="#fff" strokeOpacity=".07"/><rect x="376" y={210+i*76} width="190" height="46" rx="3" fill="#0d0c09" stroke="#fff" strokeOpacity=".07"/></g>)}
          <rect x="132" y="445" width="180" height="46" rx="3" fill="#c99a3c" opacity=".16" stroke="#c99a3c" strokeOpacity=".55"/>
          <circle cx="637" cy="460" r="38" fill="none" stroke="#c99a3c" strokeOpacity=".35"/><path d="M620 460h34M637 443v34" stroke="#c99a3c" opacity=".65"/>
        </>}
        {variant === "connect" && <>
          <rect x="274" y="70" width="252" height="480" rx="34" fill="#090806" stroke="#c99a3c" strokeOpacity=".34"/>
          <rect x="364" y="87" width="72" height="7" rx="4" fill="#fff" opacity=".08"/>
          <circle cx="400" cy="190" r="58" fill="none" stroke="url(#gold)" strokeWidth="2" opacity=".8" filter="url(#glow)"/>
          <text x="400" y="205" textAnchor="middle" fill="#e7c06a" fontFamily="Georgia,serif" fontSize="44">P</text>
          <rect x="320" y="286" width="160" height="10" rx="5" fill="#fff" opacity=".1"/>
          <rect x="342" y="316" width="116" height="8" rx="4" fill="#fff" opacity=".055"/>
          <rect x="318" y="375" width="164" height="54" rx="8" fill="#c99a3c" opacity=".12" stroke="#c99a3c" strokeOpacity=".3"/>
          <rect x="318" y="447" width="164" height="54" rx="8" fill="#fff" opacity=".025" stroke="#fff" strokeOpacity=".06"/>
          <path d="M210 180h-90M590 410h100" stroke="#c99a3c" strokeOpacity=".24"/><circle cx="120" cy="180" r="4" fill="#c99a3c"/><circle cx="690" cy="410" r="4" fill="#c99a3c"/>
        </>}
        {variant === "archive" && <>
          <rect x="90" y="90" width="280" height="365" rx="5" fill="#0a0907" stroke="#fff" strokeOpacity=".08" transform="rotate(-4 230 270)"/>
          <rect x="430" y="145" width="275" height="330" rx="5" fill="#080705" stroke="#c99a3c" strokeOpacity=".18" transform="rotate(5 568 310)"/>
          <rect x="125" y="132" width="174" height="130" rx="4" fill="#11100d"/><path d="M150 235c35-70 92-88 130-36" fill="none" stroke="#c99a3c" strokeOpacity=".35"/>
          <rect x="125" y="302" width="170" height="12" rx="6" fill="#fff" opacity=".09"/><rect x="125" y="332" width="120" height="9" rx="5" fill="#fff" opacity=".05"/>
          <circle cx="566" cy="270" r="65" fill="none" stroke="url(#gold)" strokeWidth="2" opacity=".55"/>
          <rect x="490" y="382" width="150" height="10" rx="5" fill="#fff" opacity=".075"/>
        </>}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050403] to-transparent" />
    </div>
  );
}
