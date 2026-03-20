import { Hero } from "@/components/home/Hero";
import { AnimalCategories } from "@/components/home/AnimalCategories";
import { ProductEcosystem } from "@/components/home/ProductEcosystem";
import { DiseaseMapping } from "@/components/home/DiseaseMapping";
import { Stats } from "@/components/home/Stats";
import { HomeBackground } from "@/components/home/HomeBackground";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeBackground>
        <AnimalCategories />
        <ProductEcosystem />
        <DiseaseMapping />
        <Stats />
      </HomeBackground>
    </>
  );
}
