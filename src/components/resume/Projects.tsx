import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ice Rink Management System',
      description: 'End-to-end design and deployment of a modern facility and POS solution, with emphasis on usability, real-time management, and operational security.',
      technologies: ['Angular', 'Node.js', 'Nest.js', 'Microservices' ,'PostgreSQL', 'Multi Tenent'],
      highlights: [
        'Full project lifecycle ownership',
        'Customizable POS system',
        'Real-time inventory management',
        'Event scheduling and booking',
        'Multi-tier facility hierarchy'
      ]
    },
    {
      title: 'E-commerce Merchant App',
      description: 'Empowered merchants with tools for seamless order, stock, and catalogue management, and actionable sales analytics.',
      technologies: ['React', 'Express.js','MySQL','Analytics Dashboard', 'Multi-role Permissions'],
      highlights: [
        'Comprehensive store management',
        'Real-time inventory tracking',
        'Dynamic product catalogue',
        'Interactive sales analytics',
        'Automated order notifications'
      ]
    },
    {
      title: 'Food Order Management Platform',
      description: 'Streamlined food ordering and pickup processes with QR integration and workflow automation.',
      technologies: ['React', 'Nest.js', 'MongoDB', 'QR Generation', 'Email Automation'],
      highlights: [
        'Admin and customer portals',
        'QR code restaurant identification',
        'Food item management',
        'Order tracking system',
        'Automated email notifications'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 bg-card group"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-card-foreground mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;