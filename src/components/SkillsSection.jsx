import { useState } from "react";
import { cn } from "@/lib/uils";

const skills = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Vite", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },

  // Backend
  { name: "NestJS", level: 85, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "JWT Authentication", level: 85, category: "backend" },

  // Databases
  { name: "MongoDB", level: 85, category: "databases" },
  { name: "MySQL", level: 80, category: "databases" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Trello", level: 80, category: "tools" },
  { name: "Canva", level: 85, category: "tools" },
  { name: "Iberis", level: 70, category: "tools" },

  // Soft Skills
  { name: "Time Management", level: 90, category: "soft skills" },
  { name: "Adaptability", level: 95, category: "soft skills" },
  { name: "Critical Thinking", level: 85, category: "soft skills" },
  { name: "Attention to Detail", level: 90, category: "soft skills" },

  // Languages
  { name: "Arabic (Native)", level: 100, category: "languages" },
  { name: "English (Professional)", level: 85, category: "languages" },
  { name: "French (Professional)", level: 85, category: "languages" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "databases",
  "tools",
  "soft skills",
  "languages",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
