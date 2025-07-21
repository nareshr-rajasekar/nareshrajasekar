import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Ready to bring your next project to life? Let's connect and discuss how I can help.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="opacity-90">+91-8072605889</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="opacity-90">nareshrrajasekar@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="opacity-90">Bangalore, India</p>
          </div>
        </div>
        
        <div className="text-center border-t border-white/20 pt-8">
          <p className="opacity-75">
            © 2025 Naresh Rajasekar. Built with React and passion for clean code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;