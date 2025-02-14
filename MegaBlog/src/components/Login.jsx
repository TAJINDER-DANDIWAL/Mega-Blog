import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import { Input, Button, Logo, Select } from "./index";
import authservice from "../AppWrite/auth";
import { useForm } from "react-hook-form";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const inLogin = async (data) => {
    setError("");
    try {
      let response = await authservice.Login(data);
      if (response) {
        let userdata = await authservice.getCurrentUser();
        dispatch(storeLogin({ userdata }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <form onSubmit={handleSubmit(inLogin)} className="mt-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="border p-2 w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="border p-2 w-full"
              />
            </div>

            <div className="space-y-2">
              <Button type="submit" className="w-full">
                Login / Sign In
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
// This component is a login form that allows users to sign in to their account.