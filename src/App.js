import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainRouter from "./router/mainRouter";
import { Route, Routes } from "react-router-dom";
import { Search } from "@mui/icons-material";
import Footer from "./components/footer";

function App() {
  const [values, setValues] = useState("");
  return (
    <div className="App">
      <Header GetInput={setValues} />
      <Routes>
        <Route path="/search" element={<Search />} addData={values} />
      </Routes>
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
