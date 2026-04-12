import { site } from "@/data/site";

export function HeroCodePanel() {
  const displayName =
    site.lastName.trim().length > 0
      ? `${site.firstName} ${site.lastName}`.trim()
      : site.firstName;

  return (
    <div className="glass-panel overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-black/30 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 font-mono text-xs text-slate-500">developer.ts</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
        <code>
          <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span>{" "}
          <span className="text-slate-500">=</span> {"{"}
          {"\n"}
          {"  "}
          <span className="text-sky-300">name</span>
          <span className="text-slate-500">:</span>{" "}
          <span className="text-emerald-400">&quot;{displayName}&quot;</span>
          <span className="text-slate-500">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky-300">role</span>
          <span className="text-slate-500">:</span>{" "}
          <span className="text-emerald-400">&quot;{site.role}&quot;</span>
          <span className="text-slate-500">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky-300">skills</span>
          <span className="text-slate-500">:</span> <span className="text-slate-500">[</span>
          {"\n"}
          {"    "}
          <span className="text-emerald-400">&quot;React js&quot;</span>
          <span className="text-slate-500">,</span>
          <span className="text-emerald-400">&quot;Next js&quot;</span>
          <span className="text-slate-500">,</span>
          <span className="text-emerald-400">&quot;Express js&quot;</span>
          <span className="text-slate-500">,</span>
          <span className="text-slate-500">,</span> <span className="text-emerald-400">&quot;Node.js&quot;</span>
          <span className="text-slate-500">,</span>
          {"\n"}
          {"    "}
          <span className="text-emerald-400">&quot;Java Spring Boot&quot;</span>
          <span className="text-slate-500">,</span>{" "}
          <span className="text-emerald-400">&quot;PostgreSQL&quot;</span>
          <span className="text-slate-500">,</span>{" "}
          <span className="text-emerald-400">&quot;MongoDB&quot;</span>
          <span className="text-slate-500">,</span>
          {"\n"}
          {"    "}
          <span className="text-emerald-400">&quot;TypeScript&quot;</span>
          <span className="text-slate-500">,</span>{" "}
          <span className="text-emerald-400">&quot;Tailwind CSS&quot;</span>
          {"\n"}
          {"  "}
          <span className="text-slate-500">],</span>
          {"\n"}
          {"  "}
          <span className="text-sky-300">available</span>
          <span className="text-slate-500">:</span> <span className="text-amber-300">true</span>
          {"\n"}
          <span className="text-slate-500">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
