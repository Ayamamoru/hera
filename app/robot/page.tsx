import RobotPics from '../robotpics'

export default function Robot() {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50 dark:bg-black relative">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 sticky top-0 z-40 rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black dark:text-white">Kernel Bye</h1>
          <div className="flex gap-8">
            <a href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Home
            </a>
            <a href="/robot" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Robot
            </a>
            <a href="/competition-stats" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Competition Stats
            </a>
            <a href="/gallery" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Gallery
            </a>
            <a href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-center py-4">
        <div className="px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-sm font-medium">
          2381 robotics
        </div>
      </div>
      {/*Center page content!! */}
      <main className="flex-1 flex flex-col items-center justify-center w-full overflow-auto gap-4 rounded-t-3xl bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 shadow-inner">
        <RobotPics />
      </main>
    </div>
  );
}