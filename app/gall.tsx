export default function Gall() {
  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-6xl w-full">
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Gallery</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-2xl">
        Explore photos and videos from our robotics competitions and events.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="aspect-square bg-zinc-200 dark:bg-zinc-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-zinc-500 dark:text-zinc-400 text-lg">Image {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}