import React from 'react'
import "./App.css";
import routes from "./routes";
import { DndProvider } from "react-dnd";
import Backend from 'react-dnd-html5-backend'

const App = () => {
  return (
    <DndProvider backend={Backend}>{routes}</DndProvider>
  )
};

export default App;
