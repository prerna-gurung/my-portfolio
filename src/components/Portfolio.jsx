import React from "react";

import image from "../images/web-design.jpg";
const imageAltText = "web design book, notebook and laptop";


const projectList = [
  {
    title: "Take Notes with Keeper app",
    description:
      "This is a react application with features to create, delete and edit your notes with dynamic height",
    url: "https://prerna-gurung.github.io/Keeper-notes-app/",
  },
  {
    title: "My Portfolio",
    description:
      "My first portfolio website with some of my freeCodeCamp projects.",
    url: "https://prerna-gurung.github.io/Portfolio/",
  },
  {
    title: "Product Landing page",
    description:
      "Witcher 3 PC game products landing page.",
    url: "https://prerna-gurung.github.io/Game_Landing_page/",
  },
  {
    title: "Anonymous Secrects",
    description:
      "To Show anonymous secrects of people around you using API integration",
    url: "https://secrects-project.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
