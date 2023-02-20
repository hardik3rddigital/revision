import React from "react";
import Props from "./Components/Props";
import EventHandle from "./Components/EventHandle";
import ParentComponets from "./Components/ParentComponets";
import ConditionalRendering from "./Components/ConditionalRendering";
import List from './Components/List';
import Styling from "./Components/Styling";
import FormControl from "./Components/FormControl";
import ReactFragement from "./Components/ReactFragement";
import MemoComponent from "./Components/MemoComponent";
import { Ref } from "./Components/Ref";
import PortalElement from "./Components/PortalElement";
import ErrorBoundary from "./Components/ErrorBoundaryUser";
import HigherOrderComponent from "./Components/HigherOrderComponent";
import CounterRenderProps from "./Components/RenderingProps/RenderProps";
import ConText from "./Components/Context/ConText";
import Http from "./Components/Http";
import HttpForms from "./Components/HttpForms";
import UseStateHook from "./Components/Hooks/UseStateHook";
import UseStatePreviousData from "./Components/Hooks/UseStatePreviousData";


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

      <div className="container mt-5 shadow p-3 border">
        <Styling primary={true} />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <FormControl />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <ReactFragement />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <MemoComponent  ParameterName="Memo Components" />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <Ref />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <PortalElement />
      </div>  

      <div className="container mt-5 shadow p-3 border">
        <ErrorBoundary />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <HigherOrderComponent />
      </div>  

      <div className="container mt-5 shadow p-3 border">
        <CounterRenderProps render={(param,count)=>param+count} />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <ConText />
      </div>


      <div className="container mt-5 shadow p-3 border">
        <Http />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <HttpForms />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <UseStateHook />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <UseStateHook />
      </div>

      <div className="container mt-5 shadow p-3 border">
        <UseStatePreviousData />
      </div>

    </div>
  );
}

export default App;
