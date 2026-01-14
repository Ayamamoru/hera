export default function RobotPics() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
      <div className="flex-1">
        <div className="w-full h-64 bg-zinc-200 dark:bg-zinc-700 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-zinc-500 dark:text-zinc-400 text-lg">Robot Image</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Our Robot</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Meet the Kernel Bye, our advanced VEX Robotics robot designed for competition excellence.
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Specifications</h3>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>• High-performance drivetrain</li>
            <li>• Advanced manipulator system</li>
            <li>• Autonomous capabilities</li>
            <li>• Durable construction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}