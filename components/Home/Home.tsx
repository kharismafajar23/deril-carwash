import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LayananSection from "./LayananSection/LayananSection";
import TentangKamiSection from "./TentangKamiSection/TentangKamiSection";
import HargaSection from "./HargaSection/HargaSection";
import TestimoniSection from "./TestimoniSection/TestimoniSection";
import KontakSection from "./KontakSection/KontakSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <LayananSection></LayananSection>
      <TentangKamiSection></TentangKamiSection>
      <HargaSection></HargaSection>
      <TestimoniSection></TestimoniSection>
      <KontakSection></KontakSection>
    </>
  );
};

export default Home;
