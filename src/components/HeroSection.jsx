import { ArrowDown } from "lucide-react";
import profile from "../assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
<div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={profile}
                alt="Ghaith Jridi"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-background shadow-2xl transform transition-transform duration-300 group-hover:scale-105 object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ghaith
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jridi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full Stack Web Developer building scalable apps with React, NestJS,
            Node.js & MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
