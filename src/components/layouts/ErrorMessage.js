import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { useAuth } from "../../context/AuthContext";

const ErrorMessage = () => {
  const { error, setError } = useAuth();

  return (
    error && (
      <div className="flex justify-center">
        <div className="rounded-md max-w-md w-full bg-red-50 p-1 mt-1">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                onclick={() => setError("")}
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error: {error}
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ErrorMessage;
