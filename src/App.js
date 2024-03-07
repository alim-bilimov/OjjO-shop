import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Hero from "./pages/home/Hero/imdex";
import Salony from "./pages/home/Salony/salony";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Hero />
      <Salony />
    </div>
  );
}

export default App;
