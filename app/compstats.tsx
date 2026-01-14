export default function CompStats() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Competition Statistics</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-2xl">
        Track our performance and achievements in VEX Robotics competitions.
      </p>
      <div className="w-full max-w-4xl bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
        <p className="text-zinc-700 dark:text-zinc-300">Competition stats and rankings will be displayed here.</p>
      </div>
    </div>
  );
}