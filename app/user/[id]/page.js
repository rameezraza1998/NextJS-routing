import React from "react";
import Link from "next/link";

const SingleUser = async ({ params: { id } }) => {
  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const response = await data.json();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      {/* User Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* User Info Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {response.firstName} {response.lastName}
          </h1>
          <p className="text-gray-500 text-sm">ID: {response.id}</p>
        </div>

        {/* User Details */}
        <div className="text-gray-700">
          <div className="mb-4">
            <h2 className="font-semibold">First Name:</h2>
            <p className="text-gray-600">{response.firstName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Last Name:</h2>
            <p className="text-gray-600">{response.lastName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">University:</h2>
            <p className="text-gray-600">{response.university}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
        <Link href="/user">
       
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            
          >
            Go Back
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
