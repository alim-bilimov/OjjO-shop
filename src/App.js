import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import MainRouter from "./router/mainRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
