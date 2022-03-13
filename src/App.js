import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Careers from "./pages/careers";
import Locations from "./pages/locations";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
