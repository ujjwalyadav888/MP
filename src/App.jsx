
import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Sidebar from "./component/Sidebar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HOME from "./pages/home.jsx";
import PRODUCT from "./pages/product.jsx";
import CONTACT from "./pages/Contact.jsx";
import ABOUT from "./pages/About.jsx";
import LISTEDGYMS from "./pages/listedGyms.jsx";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">

        <Navbar
          onToggleSidebar={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }
        />

        <div className="flex flex-1">

          <Sidebar isOpen={isSidebarOpen} />

          <main className="p-6 flex-1">
            <Routes>
              <Route path="/" element={<HOME />} />
              <Route path="/products" element={<PRODUCT />} />
              <Route path="/contact" element={<CONTACT />} />
              <Route path="/about" element={<ABOUT />} />
              <Route path="/listedGyms" element={<LISTEDGYMS />} />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}
