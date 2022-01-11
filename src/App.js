import React from "react";
import "./styles.css";
import "./App.css";
import ComponentC from "./components/ComponentC";
import react from "react";
import CounterOne from "./components/CounterOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={'Sudha Arora'}>
        <ChannelContext.Provider value={'codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      
      <h4>useReducer:</h4>
      <CounterOne />
    </div>
  )
}


export default App;