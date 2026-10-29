import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeatureCard } from "@/components/FeatureCard";
import { WorkStack } from "@/components/WorkStack";
import { Stats } from "@/components/Stats";
import { Method } from "@/components/Method";
import { Craft } from "@/components/Craft";
import { Path } from "@/components/Path";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="page" id="top">
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <FeatureCard />
        <WorkStack />
        <Stats />
        <Method />
        <Craft />
        <Path />
        <Contact />
      </main>
    </div>
  );
}
