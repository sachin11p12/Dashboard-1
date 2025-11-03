import { Menu, Moon, Sun } from "lucide-react";

type NavbarProps = {
  toggleSidebar: () => void;
  toggleTheme: () => void;
  theme: string;
};

export default function Navbar({ toggleSidebar, toggleTheme, theme }: NavbarProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center transition-colors duration-300">
      {/* Menu Button (mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
        Dashboard
      </h1>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/*  Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

        {/* User Info */}
        <div className="flex items-center gap-4 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-400 rounded-full px-3 py-1">
          <span className="text-gray-600 dark:text-gray-300 hidden sm:inline ml-2">
            Sachin
          </span>
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </header>
  );
}



// import { Menu } from "lucide-react";

// type NavbarProps = {
//   toggleSidebar: () => void;
// };

// export default function Navbar({ toggleSidebar }: NavbarProps) {
//   return (
//     <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
//       {/*   Menu Button (only visible on small screens) */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden p-2 rounded hover:bg-gray-100"
//       >
//         <Menu className="w-6 h-6 text-gray-700" />
//       </button>

//       {/*  Title */}
//       <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>

//       {/*  User Info */}
//       <div className="flex items-center gap-4 hover:bg-blue-100 transition-all duration-400 rounded-l-full rounded-r-full">
//         <span className="text-gray-600 hidden sm:inline ml-2">Sachin</span>
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="avatar"
//           className="rounded-full w-10 h-10"
//         />
//       </div>
//     </header>
//   );
// }
