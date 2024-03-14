import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainRouter from "./router/mainRouter";
import { Route, Routes } from "react-router-dom";
import { Search } from "@mui/icons-material";

function App() {
  const [values, setValues] = useState("");
  return (
    <div className="App">
      <Header GetInput={setValues} />
      <Routes>
        <Route path="/search" element={<Search />} addData={values} />
      </Routes>
      <MainRouter />
    </div>
  );
}

export default App;
