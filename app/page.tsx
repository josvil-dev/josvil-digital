import Image from "next/image";
import Hero from "./Components/Hero";
import Work from "./Components/Work";


export default function Home() {
  return (
    <div className=" min-h-screen">
     <Hero />
     <Work />
    </div>
  );
}
