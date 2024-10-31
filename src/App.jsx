import { useState } from "react";
import Navbar from "./components/navbar";
import FeaturedProperties from "./components/feactures";
import ContactForm from "./components/contatt";
import Footer from "./components/footer";
import Hero from "./components/hero";


function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
