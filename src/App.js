import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SIgnIn from "./pages/SignIn";
import { useState } from "react";

function App() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [accountId, setAccountId] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar setAccountId={setAccountId} />
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SIgnIn
              setName={setName}
              setEmail={setEmail}
              setAccountId={setAccountId}
            />
          </Route>
          <div className="content ml-[25%] px-4">
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/income">
              <Income email={email} accountId={accountId} />
            </Route>
            <Route path="/expenses">
              <Expenses email={email} accountId={accountId} />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
