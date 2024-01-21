import Image from "next/image";
import First from "./components/Sections/Section1/First";
import Second from "./components/Sections/section2/Second";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </main>
  );
}
