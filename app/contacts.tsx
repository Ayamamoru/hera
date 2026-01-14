export default function Contacts() {
  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Contact Us</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center">
        Get in touch with Team 2381 for inquiries, partnerships, or more information.
      </p>
      <form className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black py-2 px-4 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}