import Nav from "./assets/components/Nav";
import { Hero, Product, Services, Footer } from "./sections";

const App = () => {
  return (
    <main className="relative bg-primary">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
