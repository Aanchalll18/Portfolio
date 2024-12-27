import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills/>
      <Portfolio/>
      <Education/>
    </>
  );
}
