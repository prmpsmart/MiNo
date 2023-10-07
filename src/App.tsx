import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountId, setAccountId] = useState("");
  // const [name, setName] = useState("Apata Miracle Peter");
  // const [email, setEmail] = useState("prmpsmart@gmail.com");
  // const [accountId, setAccountId] = useState(
  //   "accountIDaksjkasashjhlafkaowioawasmaksjn"
  // );

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar setAccountId={setAccountId} name={name} email={email} />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  setName={setName}
                  setEmail={setEmail}
                  setAccountId={setAccountId}
                />
              }
            />
            <Route
              path="/*"
              element={<Dashboard email={email} accountId={accountId} />}
            />
            <Route
              path="/incomes"
              element={<Income email={email} accountId={accountId} />}
            />
            <Route
              path="/expenses"
              element={<Expenses email={email} accountId={accountId} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
