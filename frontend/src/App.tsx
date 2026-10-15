// component pertama render
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Divisions from "./pages/Divisions";
import About from "./pages/About";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
