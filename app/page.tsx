import Image from "next/image";
import Hero from './components/Hero'
import Collection from './components/Collection' ;
import Newest from "./components/Newest";
export default function Home() {
  return (
    <main className="">
      <>
      <Hero/>
      <Collection/>
      <Newest/>
      </>
    </main>
  );
}
