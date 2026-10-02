import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Service } from './components/sections/Service';
import { Process } from './components/sections/Process';
import { Details } from './components/sections/Details';
import { Fee } from './components/sections/Fee';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { FinalCta } from './components/sections/FinalCta';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Process />
        <Details />
        <Fee />
        <WhyChooseUs />
        <Experience />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
