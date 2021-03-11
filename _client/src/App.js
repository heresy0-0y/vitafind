import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
