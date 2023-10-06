import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getAccount } from "../Backend/functions/account_management";

const SIgnIn = ({ setName, setEmail, setAccountId }) => {
  const [email, setEmailInput] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [errorCause, setErrorCause] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // return;
    const emailInput = document.getElementById("email");
    const passowrdInput = document.getElementById("password");
    if (emailInput.value === "") {
      showError("Email cannot be blank", "email");
    } else if (passowrdInput.value === "") {
      setError("Type in a correct password", "password");
    } else {
      // console.log("tESTTT");
      // getAccount(email).then((value) => console.log(value));

      // return;
      const account = await getAccount(email);

      if (account != null) {
        if (password == account.password) {
          setEmail(email);
          setName(account.name);
          setAccountId(account.id);
          history.push("/dashboard");
        } else {
          showError("Invalid password");
        }
      } else {
        showError(`User with '${email}' does not exists.`);
      }
    }
  };
  const showError = (message, from) => {
    setError(message);
    setErrorCause(from);
  };

  return (
    <div className="h-screen w-screen bg-white z-50 relative">
      <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h1>MiNO</h1>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
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
                    setEmailInput(e.target.value);
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
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="/signup"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Create a free account now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
