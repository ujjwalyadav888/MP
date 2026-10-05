import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl rounded-full"></div>
        <h1 className="relative text-9xl font-extrabold text-slate-900 tracking-tighter mix-blend-multiply">404</h1>
      </div>
      
      <div className="mt-8 z-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
