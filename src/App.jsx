import {
  Navbar,
  Hero,
  Quote,
  Portfolio,
  Contact,
  Features,
  Skills,
  Footer,
} from "./components";

function App() {
  return (
    <div className="px-10 bg-main overflow-hidden">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Quote />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
