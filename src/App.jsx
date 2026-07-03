import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


