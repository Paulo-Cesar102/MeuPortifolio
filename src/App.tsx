

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;