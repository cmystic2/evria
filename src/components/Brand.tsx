import { Link } from "react-router-dom";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center gap-2.5 ${light ? "text-white" : "text-slate-900"}`}
      aria-label="Evria home"
    >
      <img
        src="/favicon.svg?v=2"
        alt=""
        aria-hidden="true"
        width="40"
        height="40"
        className="size-10 shrink-0 rounded-xl shadow-sm"
      />
      <span className="font-display text-[24px] leading-none font-extrabold tracking-[-1.1px]">
        ev
        <span className={light ? "text-emerald-400" : "text-emerald-600"}>ria</span>
      </span>
    </Link>
  );
}
