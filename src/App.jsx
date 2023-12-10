import Nav from "./components/Nav";
import { Hero, Product, Services, Footer } from "./sections";

const App = () => {
  return (
    <main className="relative bg-primary">
      <Nav />
      <section className="px-[64px]">
        <Hero />
      </section>
      <section className="px-16 text-white">
        <Product />
        text
      </section>
      <section className="px-8 sm:px-16 py-12 sm:py-24">
        <Services />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
