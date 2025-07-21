import { Card } from '@/components/ui/card';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Valley Point Technologies',
      position: 'Software Engineer',
      location: 'Chennai',
      period: 'January 2024 – Present',
      achievements: [
        'Led the full project lifecycle for an Ice Rink Management System, collaborating closely with clients to gather requirements, and owning both frontend and backend development.',
        'Designed and implemented a customizable Point-of-Sale (POS) system to improve usability for end users.',
        'Developed inventory management modules enabling real-time stock updates and accurate tracking.',
        'Built module-based event scheduling and booking systems to streamline facility operations.',
        'Created and integrated a multi-tier hierarchy for facility management and robust role-based access control for enhanced security.',
        'Designed QR code generation systems for secure student identification and check-in processes.',
        'Developed training program management modules, including attendance tracking and reporting.'
      ]
    },
    {
      company: 'Theecode Technologies Pvt Ltd',
      position: 'Software Engineer',
      location: 'Chennai',
      period: 'November 2022 – December 2023',
      achievements: [
        'E-commerce Merchant App: Developed a comprehensive platform for store management, including real-time inventory tracking, dynamic product catalogue management, and automated order management and notifications.',
        'Built interactive sales analytics dashboards, supporting merchants in making data-driven decisions.',
        'Implemented a multi-role permission system for differentiated access controls.',
        'Food Order Management App: Created a food order management system with dedicated admin and customer portals, improving order processing workflows.',
        'Designed QR code generation for restaurant identification, allowing customers to access menus directly.',
        'Developed modules for food item management, order tracking, and automated email notifications, enhancing the customer experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 bg-card"
            >
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-card-foreground">{exp.position}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-card-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;