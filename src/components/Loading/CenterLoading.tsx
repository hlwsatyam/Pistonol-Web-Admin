// components/home/Loading/CenterLoading.tsx

import React from "react";

const CenterLoading: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
          <h1 className="text-white text-xl font-semibold tracking-wide animate-pulse">
            Loading, please wait...
          </h1>
        </div>
      </div>
    </>
  );
};

export default CenterLoading;
