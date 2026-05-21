import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Sobre from "../components/Sobre/Sobre";
import Skills from "../components/Skills/Skills";
import Projetos from "../components/Projetos/Projetos";
import Contato from "../components/Contato/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}