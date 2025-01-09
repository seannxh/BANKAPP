import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoading } from "../loadingcontext.jsx"

const LoadingScreen = () => {
  const { isLoading } = useLoading();

  return (
    isLoading && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    )
  );
};

export default LoadingScreen;
