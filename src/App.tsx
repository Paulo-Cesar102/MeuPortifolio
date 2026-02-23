import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    /* O basename deve ser exatamente o nome do seu repositório no GitHub.
       Isso faz com que o link 'paulo-cesar102.github.io/MeuPortfolio/' 
       seja entendido como a página Home.
    */
    <BrowserRouter basename="/MeuPortifolio">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        
        {/* Dica: Rota de fallback caso o usuário digite algo errado */}
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;