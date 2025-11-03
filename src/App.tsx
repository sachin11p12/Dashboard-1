import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Setting";

export default function App() {
  //  Sidebar toggle state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  //  Theme state (dark / light)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //  When theme changes → update <html> class and save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  //  Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar (responsive) */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/*  Overlay (click outside to close) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/*  Navbar now receives theme + toggleTheme */}
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {/*  Main Content */}
        <main className="p-6 overflow-y-auto flex-1 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}



// import { useState } from "react";
// import {Routes, Route} from "react-router-dom";

// import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard';
// import Users from "./pages/Users";
// import Settings from "./pages/Setting";

// export default function App() {

//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   ///fun to toggle sidebar(called from navbar)
//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

//   return (
//     <div className='flex h-screen bg-gray-100'>
//       <Sidebar isOpen={isSidebarOpen} />

//       <div className='flex-1 flex flex-col'>
//         <Navbar toggleSidebar = {toggleSidebar} />
//         <main className='p-6 overflow-y-auto'>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }


