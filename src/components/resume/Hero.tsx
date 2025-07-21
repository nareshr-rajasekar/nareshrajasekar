import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Naresh Rajasekar
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Software Engineer | Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-8072605889</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>nareshrrajasekar@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, India</span>
            </div>
          </div>
        <Button
             size="lg" 
            variant="secondary" 
            className="hover:scale-105 transition-transform duration-300" 
        asChild>
  <a
    href="/Naresh Rajasekar Resume.pdf"
    download
    className="inline-flex items-center"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </a>
</Button>

           

        </div>
      </div>
    </section>
  );
};

export default Hero;