import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { createAccount } from "../Backend/functions/account_management";

export default function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [errorCause, setErrorCause] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    history.push("/dashboard");
    return;
    // prmp
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passowrdInput = document.getElementById("password");
    if (emailInput.value === "") {
      showError("Email cannot be blank", "email");
    } else if (passowrdInput.value === "") {
      setError("Type in a correct password", "password");
    } else {
      const status = await createAccount(name, email, password);
      if (status.isError) {
        showError(status.message);
      } else {
        history.push("/signin");
      }
    }
  };

  const showError = (message, from) => {
    setError(message);
    setErrorCause(from);
  };

  return (
    <div className="h-screen w-screen bg-white z-50 relative">
      <div className=" bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <p className="mt-10 text-2xl leading-9 tracking-tight text-gray-900">
            Sign up on
          </p>
          <h1>
            <span className="font-bold text-3xl">MiNo</span>
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {errorCause === "name" && (
                  <div className=" font- text-red-500">{error}</div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errorCause === "email" && (
                  <div className=" font- text-red-500">{error}</div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Create Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {errorCause === "password" && (
                  <div className=" font- text-red-500">{error}</div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                //   onClick={() => {handleSubmit()}}
              >
                Sign Up
              </button>
              \
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
