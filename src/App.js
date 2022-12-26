import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Details from "./page/Details/Details";
import Home from "./page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about/:name" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
