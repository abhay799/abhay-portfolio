export function DeploymentFlow({ stages }: { stages: string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {stages.map((stage, index) => (
        <li
          key={stage}
          className="relative rounded-2xl border border-white/10 bg-black/20 p-4"
        >
          <span className="text-xs font-semibold text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-sm font-medium leading-6 text-white">{stage}</p>
          {index < stages.length - 1 && (
            <span aria-hidden="true" className="mt-3 block text-cyan-300">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

