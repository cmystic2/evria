import { Link } from "react-router-dom";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center gap-2.5 ${light ? "text-white" : "text-slate-900"}`}
      aria-label="Evria home"
    >
      <span
        className={`flex size-10 items-center justify-center rounded-xl ${light ?
          "bg-emerald-600 text-white" :
          "bg-emerald-500 text-slate-900"}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 40 40"
          className="stroke-[2.6] stroke-emerald-600 fill-none"
          strokeLinejoin="round"
        >
          <path
            d="M20 4 33.86 12 33.86 28 20 36 6.14 28 6.14 12 Z"
          />
          <circle cx="20" cy="12" r="3" fill={light ? "white" : "currentColor"} />
          <circle cx="33.86" cy="22" r="3" fill={light ? "white" : "currentColor"} />
          <circle cx="6.14" cy="22" r="3" fill={light ? "white" : "currentColor"} />
          <path d="m20 12 13.86 10" strokeWidth={2.5} />
          <path d="m20 12 -13.86 10" strokeWidth={2.5} />
        </svg>
      </span>
      <span className="font-display text-[24px] font-extrabold tracking-[-1.1px]">
        ev
        <span className={light ? "text-emerald-400" : "text-emerald-600"}>ria</span>
      </span>
    </Link>
  );
}
