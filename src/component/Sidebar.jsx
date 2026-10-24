
import { User2Icon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed  top-16 bottom-0 
      bg-slate-800 border-r border-slate-700
      flex flex-col justify-between
      overflow-x-hidden overflow-y-auto
      transition-all duration-300 ease-in-out
      ${isOpen ? 'w-64 p-4' : 'w-0 p-0 border-r-0'}`}
    >
      {isOpen && (
        <>
          <div className="min-w-56">
            <Link to="/">
              <p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
                HOME
              </p>
            </Link>

           <Link to="/listedGyms"> <p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
              LISTED GYMS
            </p></Link>

            <Link to="/products">
              <p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
                PRODUCT
              </p>
            </Link>

            <p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
              YOGA CLASSES
            </p>

            <Link to="/contact">
              <p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
                CONTACT
              </p>
            </Link>

            <Link to="/about"><p className="m-2 font-medium hover:text-blue-400 cursor-pointer">
              ABOUT
            </p>
            </Link>
          </div>

          <div className="p-2 text-slate-400 hover:text-white cursor-pointer">
            <User2Icon />
          </div>
        </>
      )}
    </aside>
  );
}

export default Sidebar;
