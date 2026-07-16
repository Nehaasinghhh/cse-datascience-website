import Hero from "../components/Hero";
import Department from "../components/Department";
import HodMessage from "../components/HodMessage";
import Programs from "../components/Programs";
import Stats from "../components/Stats";


export default function Home() {
  return (
    <>
    <Hero/>
    <HodMessage />
      <Department />
      <Programs />
      <Stats />  
    </>
  );
}