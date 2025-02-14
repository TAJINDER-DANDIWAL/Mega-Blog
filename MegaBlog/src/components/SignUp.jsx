import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Login as storeLogin } from "../store/authSlice";
import { Input, Button, Logo, Select } from "./index";
import authservice from "../AppWrite/auth";
import { useForm } from "react-hook-form";

export default function SignUp() {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const onSubmit = async (data) => {
        setError("");
        try {
            let response = await authservice.CreateAccount(data);
            if (response) {
                let userdata = await authservice.getCurrentUser();
                dispatch(storeLogin({ userdata }));
                navigate("/");
            }
        } catch (e) {
            setError(e.message);
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
                <h2 className="text-center text-2xl font-bold leading-tight">Create your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/Login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="name">Name</label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name is required" })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password is required" })}
                            />
                        </div>
                        <Button type="submit" disabled={loading}>
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}