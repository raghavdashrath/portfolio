import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Parking Booking System",
    description:
    "React app for fully functional online parking booking system.",
    image: "SS.png",
    tags: ["React","MongoDB","JavaScript"],
    demoUrl: "https://parking-reservation-system-8g4e.vercel.app",
    githubUrl: "https://github.com/raghavdashrath",
  },
  {
    id: 2,
    title: "Facial Emotion Recognition",
    description:
      "Interactive web app for real-time facial emotion analysis using OpenCv.",
    image: "SS2.png",
    tags: ["Deep Learning", "Flask", "OpenCV"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Plant Diesease Detection",
    description: "Web app for detecting plant diseases using Deep learning.",
    image: "SS4.png",
    tags: ["Python", "Neural Network", "MLOps"],
    demoUrl: "https://vbfedpu5ezx7ci7e5mmnkf.streamlit.app/mlops",
    githubUrl: "https://github.com/raghavdashrath/Plant_Disease_Detection",
  },
  {
    id: 4,
    title: "Brain Tumor Detection",
    description:
      "Deep learning model to detect brain tumors from MRI images with high accuracy.",
    image: "SS3.png",
    tags: ["Deep Learning", "Streamlit", "MLOps"],
    demoUrl: "#",
    githubUrl: "https://github.com/raghavdashrath/Brain_Tumor_Detection",
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
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
            href="https://github.com/raghavdashrath/Leetcode-Solutions"
          >
            Created a Repository for 150+ LeetCode Question's solutions <ArrowRight size={16} />
          </a>
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/raghavdashrath"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};