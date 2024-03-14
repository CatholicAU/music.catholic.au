import Image from "next/image";
import Masthead from "./components/Masthead";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center w-full bg-subtle-paper text-sm">
      <Masthead />
      <SearchBar />
      <Gallery />
      <Footer />
    </main>
  );
}
