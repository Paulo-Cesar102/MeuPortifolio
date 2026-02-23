import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Detecta se estamos no GitHub ou no PC local
  const isGitHubPages = window.location.hostname.includes("github.io");
  const baseName = isGitHubPages ? "/MeuPortifolio" : "";

  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;