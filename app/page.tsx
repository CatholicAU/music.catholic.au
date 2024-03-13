import Image from "next/image";
import Nav from "./parts/Nav";
import Masthead from "./parts/Masthead";
import SearchBar from "./parts/SearchBar";
import Gallery from "./parts/Gallery";
import Footer from "./parts/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-90 bg-slate-50">
      <Nav />
      <Masthead />
      <SearchBar />

      <Gallery />

      <Footer />
    </main>
  );
}
