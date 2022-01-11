import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookcounterThree";
import HookCounterTow from "./components/HookCounterTwo";
import ClassCounterOne from "./components/ClassCounterOne";
import "./styles.css";
import "./App.css"
import HookcounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import 'semantic-ui-css/semantic.min.css'
import Create from "./crud-components/Create";
import Read from "./crud-components/Read";
import Update from "./crud-components/Update";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ComponentC from "./components/ComponentC";
import React from "react";

export default function App() {
  const UserContext = React.createContext();
  return (
    <Router>
      <div className="main">
        {/* <h2>Hook Learning Point</h2>
      <ClassCounter />
      <br />
      <HookCounter />
      <br />
      <HookCounterTow />
      <br />
      <HookCounterThree />
      <br />
      <p>useState with array: </p>
      <HookCounterFour />
      <br />
      <p>React class: useEffect after render: </p>
      <ClassCounterOne />
      <br />
      <p>React Hook: useEffect after render, conditionally run effect: </p>
      <HookcounterOne />
      <HookMouse />
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter /> 
      <DataFetching />*/}
        {/* <h2 className="main-header">React CRUD Operation with Hook and Link</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div>
          <Route exact path="/read" component={Read} />
        </div>
        <div>
          <Route exact path="/update" component={Update} />
        </div> */}
        {/* <UserContext.Provider value={'Sudha Khatri'}> */}
          <ComponentC />
        {/* </UserContext.Provider> */}
      </div>
    </Router>
  );
}

// Fake API link: https://mockapi.io/projects/614c14ede4cc2900179eb27f
// FakeAPI link: https://614c14ede4cc2900179eb27e.mockapi.io/fakeData