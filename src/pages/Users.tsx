import { Edit, Trash2, Search } from "lucide-react";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const initialUsers: User[] = [
  { id: 1, name: "Sachin Kumar", email: "sachin@example.com", role: "Admin" },
  { id: 2, name: "Rahul Mehta", email: "rahul@test.com", role: "Editor" },
  { id: 3, name: "Priya Sharma", email: "priya@example.com", role: "User" },
  { id: 4, name: "Neha Verma", email: "neha@example.com", role: "Viewer" },
  { id: 5, name: "Arjun Singh", email: "arjun@example.com", role: "User" },
  { id: 6, name: "Deepika Reddy", email: "deepika@example.com", role: "User" },
  { id: 7, name: "Vikram Patel", email: "vikram@test.com", role: "Editor" },
  { id: 8, name: "Anjali Kapoor", email: "anjali@example.com", role: "User" },
  { id: 9, name: "Rohan Das", email: "rohan@example.com", role: "Viewer" },
  { id: 10, name: "Shreya Jain", email: "shreya@example.com", role: "User" },
  { id: 11, name: "Karan Malhotra", email: "karan@example.com", role: "User" },
  {
    id: 12,
    name: "Ishita Tandon",
    email: "ishita@test.com",
    role: "Editor",
  },
  { id: 13, name: "Gaurav Soni", email: "gaurav@example.com", role: "User" },
  { id: 14, name: "Mitali Bose", email: "mitali@example.com", role: "Viewer" },
  { id: 15, name: "Alok Gupta", email: "alok@example.com", role: "User" },
  { id: 16, name: "Swati Aggarwal", email: "swati@example.com", role: "User" },
  { id: 17, name: "Nikhil Raj", email: "nikhil@test.com", role: "Editor" },
  { id: 18, name: "Tanya Sharma", email: "tanya@example.com", role: "User" },
  { id: 19, name: "Pulkit Shah", email: "pulkit@example.com", role: "Viewer" },
  { id: 20, name: "Riya Singh", email: "riya@example.com", role: "User" },
  { id: 21, name: "Ajay Menon", email: "ajay@example.com", role: "User" },
  {
    id: 22,
    name: "Sanjana Nair",
    email: "sanjana@test.com",
    role: "Editor",
  },
  { id: 23, name: "Harsh Yadav", email: "harsh@example.com", role: "User" },
  { id: 24, name: "Kajal Saxena", email: "kajal@example.com", role: "Viewer" },
  { id: 25, name: "Varun Desai", email: "varun@example.com", role: "User" },
  { id: 26, name: "Sneha Murthy", email: "sneha@example.com", role: "User" },
  { id: 27, name: "Rohit Bansal", email: "rohit@test.com", role: "Editor" },
  { id: 28, name: "Chhavi Jain", email: "chhavi@example.com", role: "User" },
  { id: 29, name: "Manav Sood", email: "manav@example.com", role: "Viewer" },
  { id: 30, name: "Aisha Khan", email: "aisha@example.com", role: "User" },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = initialUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          User Management
        </h2>

        
        {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          + Add User
        </button> */}
      </div>

      <div className="relative max-w-xs md:max-w-lg lg:max-w-2xl">
        <label htmlFor="search">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 w-5 h-5" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3">{user.id}</td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {user.name}
                  </td>
                  <td className="px-6 py-3">{user.email}</td>
                  <td className="px-6 py-3">{user.role}</td>
                  <td className="px-6 py-3 text-center">
                    <div className="relative inline-block group mr-3">
                      <button className="text-indigo-600 hover:text-indigo-800 mr-3">
                        <Edit size={18} />
                      </button>
                      <span
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                         mb-2 px-2 py-1 min-w-max 
                         bg-gray-800 text-white text-xs rounded opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      >
                        Edit User
                      </span>
                    </div>
                    <div className="relative inline-block group mr-3">
                      <button className="text-red-600 hover:text-red-800 mr-3">
                        <Trash2 size={18} />
                      </button>
                      <span
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                         mb-2 px-2 py-1 min-w-max 
                         bg-gray-800 text-white text-xs rounded opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      >
                        Delete User
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border text-sm ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === index + 1
                ? "bg-indigo-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border text-sm ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
