import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stat from "@/components/Stat";
// import Footer from "@/components/Footer";
// import Form from "@/components/Form";

import CardContainer from "@/components/CardContainer";
import Blog from "@/components/Blog";
// import TestimonialsSection from "@/components/TestimonialsSection";
import Download from "@/components/Download";
import Features from "@/components/Features";
import ImageSlider from "@/components/ImageSlider";
import GallerySection from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import PoojaCardSlider from "@/components/PoojaCardSlider";
import { Heady } from "@/components/Heady";
import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import Pandit from "@/components/Pandit";
import Guru from "@/components/Guru";
import Bhakti from "@/components/Bhakti";
import Samagrih from "@/components/Samagrih";
import Wisdom from "@/components/Wisdom";
import Demo from "@/components/Demo";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <div>

        {/* <Hero/> */}
       
        {/* <Form/> */}
        <ImageSlider/>
        {/* <Heady/> */}
        <FlipWordsDemo/>
        <Stat/>
        {/* <div className="bg-gray-100 flex items-center justify-center pb-8 px-4 md:max-w-full lg:max-w-full">
            <CardContainer />
        </div> */}
        <Demo/>
        <PoojaCardSlider/>
        <Features/>
        <Blog/>
      
        <GallerySection/>
        <Wisdom/>
       {/* <Samagrih/> */}
        <Pandit/>
        <Guru/>
        <Bhakti/>
        <Download/>
        <TestimonialsSection/>
       
        
      </div>     
    </main>
  );
}

