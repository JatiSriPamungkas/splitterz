import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

interface LoginFormData {
    email: string;
    password: string;
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLoginOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const payload = {
            ...loginFormData,
            email: loginFormData.email.trim().toLowerCase(),
        };

        console.log(payload);

        setTimeout(() => {
            console.log("Pesan ini muncul setelah 3 detik!");
            setIsLoading(false);
        }, 3000);
    };

    return (
        <>
            <div className="flex flex-col gap-8 items-center py-4">
                <h1 className="w-full flex flex-col font-bold text-2xl font-montserrat text-center">
                    Welcome back to{" "}
                    <span className="text-blue-600">Splitterz!</span>
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-4 font-poppins"
                >
                    <Input
                        label="Email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        value={loginFormData.email}
                        onChange={handleLoginOnChange}
                        setShowPassword={setShowPassword}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="********"
                        value={loginFormData.password}
                        onChange={handleLoginOnChange}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="border rounded-sm"
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`font-semibold w-full bg-blue-600 text-white rounded-sm h-10 ${isLoading ? "bg-gray-300" : ""}`}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
                <p>
                    Didn't have account yet?{" "}
                    <span className="underline underline-offset-4 text-blue-600">
                        <Link to="/register">Register</Link>
                    </span>
                </p>
            </div>
        </>
    );
}
