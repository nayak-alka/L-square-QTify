import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section section="top" sectionHdr="Top Albums" />
      <Section section="new" sectionHdr="New Albums" />
    </>
  );
}

export default App;
