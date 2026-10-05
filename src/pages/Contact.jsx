export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12 ring-1 ring-slate-900/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600">We would love to hear from you. Drop us a message!</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-white font-bold text-lg hover:from-rose-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-rose-500/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
