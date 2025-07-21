import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center">
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300 bg-card max-w-2xl w-full">
            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-lg mr-6 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Bachelor of Arts - Political Science
                </h3>
                <h4 className="text-lg font-semibold text-muted-foreground mb-4">
                  Madras Christian College, Chennai
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>June 2019 – June 2022</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;