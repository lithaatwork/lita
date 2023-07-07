import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSetion from "./components/HeroSetion";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSetion/>
      <Services/>
      <Footer/>
    </main>
  );
}
