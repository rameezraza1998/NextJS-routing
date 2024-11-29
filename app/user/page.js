import React from "react";
import Link from "next/link";

const User = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const response = await data.json();

  return (
    <>
    <Link href="/">
    <button>
      Goback
    </button>
    </Link>
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Page Title */}
      <div className="text-center text-3xl font-bold text-gray-800 mb-10">
        User Directory
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {response.users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
          >
            {/* User Info */}
            <h1 className="text-lg font-semibold text-gray-700 mb-2">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500 text-sm mb-4">
              Age: {user.age} | {user.gender}
            </p>

            {/* Button */}
            <Link href={`/user/${user.id}`}>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Show More Details..
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default User;
