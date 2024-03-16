import "./App.css";
import Header from "./components/header";
import MainRouter from "./router/mainRouter";

import { Route, Routes } from "react-router-dom";
import { Search } from "@mui/icons-material";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
