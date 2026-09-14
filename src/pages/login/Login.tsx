import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameOnChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Password: ${password}`);
  };

  return (
    <>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="w-full font-bold text-2xl font-montserrat text-center">
          Welcome back to <span className="text-blue-600">Splitterz!</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 font-poppins"
        >
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={handleNameOnChange}
              className="border rounded-sm font-normal px-4 py-2"
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="******"
              value={password}
              onChange={handlePasswordOnChange}
              className="border rounded-sm font-normal px-4 py-2"
            />
          </div>

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
            className="font-semibold w-full bg-blue-600 text-white rounded-sm h-10"
          >
            Login
          </button>
        </form>
        <p>
          Didn't have account yet?{" "}
          <span className="underline underline-offset-4 text-blue-600">
            Register
          </span>
        </p>
      </div>
    </>
  );
}
