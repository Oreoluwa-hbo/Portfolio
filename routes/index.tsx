import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hello, World!"',
              "I'm Oreoluwa",
              "I'm a developer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I'm searching for the next step in my Development Journey.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Passion for Continuous Learning",
      description:
        "I actively seek out new technologies and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "User-Centric Approach",
      description:
        "My goal is to create user-friendly applications that solve real-world problems.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "Warner Bros. Discovery",
      timePeriod: "May 2023 - September 2023",
      location: "Ottawa ON, Canada",
    },
    {
      title: "Software Tester",
      company: "Warner Bros. Discovery",
      timePeriod: "January 2022 - December 2022",
      location: "Ottawa ON, Canada",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
}

function Projects() {
  const projects = [
    {
      title: "LEO Satellite Simulation",
      description:
        "A Low Earth Orbit satellite simulation platform with features like global ground traffic generation to mirror real-world data volumes",
      image: "/img/LEOSIM.webp",
    },
    {
      title: "Machine Learning for Intrusion Detection",
      description:
        "Implemented an Intrusion Detection System by creating a Machine Learning model",
      image: "/img/ML.webp",
    },
    {
      title: "GoodStreams",
      description:
        "A website that allows users to keep personalized lists of movies/shows",
      image: "/img/Goodstreams.webp",
    },
    {
      title: "Interactive RGB Controller with Display Feedback",
      description:
        "A C++ Arduino program that allows users to control an RGB LED via serial input, displaying values on an LCD and generating PWM signals for color changes",
      image: "/img/LED.webp",
    },
    {
      title: "EA SWE Program-VaxMan ",
      description:
        "Developed a new game based on changing the rules of Pac-Man by using Python code and open-source implementations",
      image: "/img/VaxMan.webp",
    }
  ];

  return (
    <section className="p-4 my-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project, index) => (
          <div key={index} className="card max-w-96">
            <div className="card-body p-4">
              <h2 className="card-title">
                {project.title}
                <span className="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="mt-2 w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Technologies() {
  const technologies = [
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:python",
    "logos:css-3",
    "logos:php",
    "logos:jira",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "logos:vue",
    "devicon:nextjs",
    "skill-icons:nuxtjs-dark",
    "logos:nestjs",
    "logos:fresh",
    "skill-icons:laravel-dark",
    "skill-icons:tailwindcss-dark",
    "logos:deno",
    "devicon:nodejs",
    "vscode-icons:file-type-mongo",
    "logos:postgresql",
    "skill-icons:docker",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}
