
import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded transition ${
      isActive
        ? "bg-indigo-600 text-white dark:bg-indigo-500"
        : "text-indigo-100 hover:bg-indigo-500 dark:text-indigo-200 dark:hover:bg-indigo-600"
    }`;

  return (
    <>
      {/*  Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-indigo-700 text-white dark:bg-gray-800 dark:text-gray-100 p-5 transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-10">My Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink to="/" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClasses}>
            Users
          </NavLink>
          <NavLink to="/settings" className={linkClasses}>
            Settings
          </NavLink>
        </nav>
      </aside>
      
      {/*  Mobile Sidebar */}
      <aside
        className={`
          fixed md:hidden inset-y-0 left-0 z-40 w-64
          bg-indigo-700 text-white dark:bg-gray-800 dark:text-gray-100
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          flex flex-col p-5
        `}
      >
        <h2 className="text-2xl font-bold mb-10">My Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink to="/" className={linkClasses} onClick={onClose}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClasses} onClick={onClose}>
            Users
          </NavLink>
          <NavLink to="/settings" className={linkClasses} onClick={onClose}>
            Settings
          </NavLink>
        </nav>
      </aside>
      
    </>
  );
}


// import { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

// type SidebarProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   // 🧠 Detect click outside sidebar
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target as Node)
//       ) {
//         onClose(); // close sidebar if click outside
//       }
//     };

//     // add listener only when sidebar open
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     // cleanup listener
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   const linkClasses = ({ isActive }: { isActive: boolean }) =>
//     `block px-4 py-2 rounded transition ${
//       isActive
//         ? "bg-indigo-600 text-white"
//         : "text-indigo-100 hover:bg-indigo-500"
//     }`;

//   return (
//     <>
//       {/* Desktop Sidebar (always visible) */}
//       <aside className="hidden md:flex flex-col w-64 bg-indigo-700 text-white p-5">
//         <h2 className="text-2xl font-bold mb-10">My Dashboard</h2>
//         <nav className="flex flex-col space-y-3">
//           <NavLink to="/" className={linkClasses}>
//             Dashboard
//           </NavLink>
//           <NavLink to="/users" className={linkClasses}>
//             Users
//           </NavLink>
//           <NavLink to="/settings" className={linkClasses}>
//             Settings
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Mobile Sidebar (slides in/out) */}
//       <aside
//         ref={sidebarRef}
//         className={`
//           fixed md:hidden inset-y-0 left-0 z-40 w-64 bg-indigo-700 text-white p-5
//           transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           transition-transform duration-300 ease-in-out flex flex-col
//         `}
//       >
//         <h2 className="text-2xl font-bold mb-10">My Dashboard</h2>
//         <nav className="flex flex-col space-y-3">
//           <NavLink to="/" className={linkClasses} onClick={onClose}>
//             Dashboard
//           </NavLink>
//           <NavLink to="/users" className={linkClasses} onClick={onClose}>
//             Users
//           </NavLink>
//           <NavLink to="/settings" className={linkClasses} onClick={onClose}>
//             Settings
//           </NavLink>
//         </nav>
//       </aside>
//     </>
//   );
// }
