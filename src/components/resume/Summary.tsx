import { Card } from '@/components/ui/card';

const Summary = () => {
  return (
    <section id="summary" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <Card className="p-8 shadow-card hover:shadow-hover transition-shadow duration-300 bg-card">
          <p className="text-lg leading-relaxed text-card-foreground">
            Full-stack software engineer with <span className="font-semibold text-primary">3+ years of experience</span> building 
            secure, scalable web applications. Skilled in both front-end and back-end development using JavaScript, 
            TypeScript, React, Angular, and Node.js. Experienced in microservices architecture, requirement gathering, 
            and project management. Adept at collaborating with clients and delivering effective solutions within agile environments.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Summary;