/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Users from "../pages/Users";
import { auth, db, sendPasswordReset } from "../firebase";

const ResetForm = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/Users");
    }
  }, [user, loading]);

  const reset = () => {
    sendPasswordReset(email);
  };

  return (
    <div className="bg-white px-5 py-10 rounded-3xl border-2 border-gray-100">
      <h1 className="text-3xl font-semibold">Reset Password</h1>
      <p className="font-medium text-lg text-gray-500 mt-2">
        Please enter your email below.
      </p>
      <div className="mt-4">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={email}
            className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out rounded-xl bg-blue-900 text-white text-lg font-bold"
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <p className="font-medium text-base">
          Remembered your password?{" "}
          <Link to="/SignIn" className="text-blue-900" exact>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetForm;
