import Image from "next/image";
import CoverParticles from '@/.next/components/cover-particles' 

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <p>Introduccion</p>

      </div>
    </main>
   
  );
}
