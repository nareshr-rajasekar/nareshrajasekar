import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Database, Smartphone, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript']
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'Angular', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Nest.js', 'Microservices Architecture']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['Flutter (Basic)']
    },
    {
      title: 'Cloud & Tools',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS (basic hosting)', 'GitHub', 'Postman', 'Swagger', 'JIRA', 'RESTful API Development', 'Agile (Scrum)']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 bg-card"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;