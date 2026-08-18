import { ArrowRight, Github, LayoutTemplate, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Football Academy Platform",
    description:
      "A team-built platform that helps football players evaluate their selection potential through online tests. Frontend built with HTML, CSS, JavaScript, and Bootstrap; backend logic implemented with Python and Flask.",
    Icon: Trophy,
    gradient: "from-emerald-500 to-teal-600",
    tags: ["Python", "Flask", "Bootstrap", "JavaScript", "CSS"],
    githubUrl:
      "https://github.com/SABRIwalid92/Python_Project_Football_Academy",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "This site. A responsive single-page portfolio with light and dark themes, built on React 18 and Vite, styled with Tailwind CSS v4, using Radix UI primitives and covered by a Vitest test setup.",
    Icon: LayoutTemplate,
    gradient: "from-primary to-purple-600",
    tags: ["React", "Vite", "Tailwind", "Radix UI", "Vitest"],
    githubUrl: "https://github.com/ghaithjridi/Portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div
                className={`h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <project.Icon className="h-16 w-16 text-white/90 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ghaithjridi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
