export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl bg-white/60 p-8 shadow-xl backdrop-blur-lg sm:p-16 ring-1 ring-slate-900/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-fuchsia-50 opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
        <div className="relative">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            About Us
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              Welcome to our platform. We are dedicated to delivering extraordinary experiences and pushing the boundaries of what is possible. Our team consists of passionate creators, engineers, and designers who believe in the power of innovation.
            </p>
            <p>
              Founded on the principles of excellence and creativity, we continually strive to build solutions that not only meet your needs but exceed your expectations. Join us on our journey to shape the future.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}