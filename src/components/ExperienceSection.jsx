import { Briefcase, GraduationCap } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-primary"> Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Briefcase className="text-primary" /> Professional Experience
            </h3>
            
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8 ml-3">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
                <p className="text-primary font-medium">MartechLab — Tunisia</p>
                <p className="text-sm text-muted-foreground mb-2">June 2025 - Present</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Developed and maintained full-stack web applications using React, NestJS, and MongoDB.</li>
                  <li>Built secure RESTful APIs with JWT-based authentication and role-based access control.</li>
                  <li>Implemented reusable frontend components and form validation to improve UX and maintainability.</li>
                  <li>Collaborated with cross-functional teams using Git-based workflows and modular architecture.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-xl font-bold">Financial Officer</h4>
                <p className="text-primary font-medium">Sascode</p>
                <p className="text-sm text-muted-foreground mb-2">July 2023 - August 2023</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Managed and tested financial bills and invoices using Iberis.</li>
                  <li>Prepared and reviewed employee contracts with attention to compliance.</li>
                  <li>Supported financial reporting and administrative tasks under tight deadlines.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education & Certificates
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8 ml-3">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-xl font-bold">American Certification in Full Stack Web Development</h4>
                <p className="text-primary font-medium">Coding Dojo Africa</p>
                <p className="text-sm text-muted-foreground mb-2">2024</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>1200+ hours of coding in JavaScript, Python, and Java including 3 projects.</li>
                  <li>Pair Programming and work on algorithms daily.</li>
                  <li>Soft Skills training to enhance communication and team collaboration.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-xl font-bold">Bachelor in Financial Engineering</h4>
                <p className="text-primary font-medium">Higher Institute of Economics and Commerce</p>
                <p className="text-sm text-muted-foreground mb-2">09/2020 - 06/2023</p>
              </div>

               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-xl font-bold">Baccalaureate in Economics and Management</h4>
                <p className="text-primary font-medium">Secondary School of Soukra</p>
                <p className="text-sm text-muted-foreground mb-2">09/2019 - 06/2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
