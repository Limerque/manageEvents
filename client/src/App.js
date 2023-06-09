import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import Signup from "./components/Signup";
import Manage from "./components/Manage";
import ManageAdd from "./components/ManageAdd";
import ManageEdit from "./components/ManageEdit";
import Find from "./components/Find";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-login" component={UserLogin} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/signup" component={Signup} />
          <Route path="/manage" exact component={Manage} />
          <Route path="/manage/add" component={ManageAdd} />
          <Route path="/manage/edit/:id" component={ManageEdit} />
          <Route path="/find" component={Find} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
