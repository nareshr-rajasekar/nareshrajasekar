import Navigation from '@/components/resume/Navigation';
import Hero from '@/components/resume/Hero';
import Summary from '@/components/resume/Summary';
import Skills from '@/components/resume/Skills';
import Experience from '@/components/resume/Experience';
import Projects from '@/components/resume/Projects';
import Education from '@/components/resume/Education';
import Footer from '@/components/resume/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
