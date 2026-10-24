import { Bell, Menu, SearchIcon, ShoppingBag } from "lucide-react";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="h-16 fixed top-0 left-0 right-0 z-50 flex justify-between items-center border-b-2 bg-slate-800 border-slate-700 text-white px-4">
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={onToggleSidebar}
          className="p-2 text-slate-400 hover:text-slate-50 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
        >
          <Menu />
        </button>
        <div>
          <p className="text-2xl border-b-2 border-white px-2 rounded-2xl w-fit">
            logo
          </p>
          <p className="text-sm font-semibold flex items-center gap-1">
            FlexPulse <span className="text-xs text-slate-400 block font-normal"> Fitness & Wellness</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-2 rounded-2xl p-2 w-4xl gap-2 border-slate-700 bg-slate-900">
        <input
          type="text"
          placeholder="Search your item.. "
          className="w-full border-none outline-none bg-transparent text-white placeholder-slate-400"
        />
        <button className="text-slate-400 hover:text-white">
          <SearchIcon />
        </button>
      </div>
      <div className="flex items-center gap-4 text-slate-400">
        <p className="hover:text-white cursor-pointer">
          <ShoppingBag />
        </p>
        <Bell className="hover:text-white cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;

