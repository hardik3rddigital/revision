import React from "react";
import Props from "./Components/Props";
import EventHandle from "./Components/EventHandle";
import ParentComponets from "./Components/ParentComponets";
import ConditionalRendering from "./Components/ConditionalRendering";
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <div className="container mt-5 shadow p-3 border">
        <Props name="Hardik Patel"><h5 className="m-0">I Am Props Children</h5></Props>
      </div>

      <div className="container mt-5 shadow p-3 border">
        <EventHandle />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <ParentComponets />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <ConditionalRendering />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <List />
      </div>
    </div>
  );
}

export default App;
