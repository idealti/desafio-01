import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Teste from "./Page/Home";
function App() {
  return (
    <>
      <Router>
        <Route component={Teste} path='/' exact />
      </Router>
    </>
  );
}

export default App;
