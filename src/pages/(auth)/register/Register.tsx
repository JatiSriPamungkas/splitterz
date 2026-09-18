import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState<boolean>(true);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            ...formData,
            email: formData.email.trim().toLowerCase(),
        };

        console.log(payload);
    };

    return (
        <>
            <div className="flex flex-col gap-8 items-center">
                <h1 className="font-bold text-2xl font-montserrat text-center">
                    Welcome to <span className="text-blue-600">Splitterz!</span>
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 font-poppins"
                >
                    <Input
                        label="Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleOnChange}
                        setShowPassword={setShowPassword}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        onChange={handleOnChange}
                        setShowPassword={setShowPassword}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleOnChange}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="********"
                        value={formData.confirmPassword}
                        onChange={handleOnChange}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />

                    <button
                        type="submit"
                        className="font-semibold w-full bg-blue-600 text-white rounded-sm h-10"
                    >
                        Register
                    </button>
                </form>
                <p>
                    Already have an account?{" "}
                    <span className="underline underline-offset-4 text-blue-600">
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
        </>
    );
}
