import Image from "next/image";
import First from "./components/Sections/Section1/First";
import Second from "./components/Sections/section2/Second";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Third from "./components/Sections/section3/Third";
import Fourth from "./components/Sections/section4/Fourth";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <First />
      </section>
      <section>
        <Second />
      </section>
      <section>
        <Third />
      </section>
      <section>
        <Fourth />

        <Footer />
      </section>
    </main>
  );
}
