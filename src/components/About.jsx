import React from "react";
import image from "../images/leaves.png";

const imageAltText = "leaves abstract background";

const description =
  "I'm a computer science student from Delhi University. I enjoy creating responsive and interactive websites in creative ways.";

const skillsList = [
  "Front-end Development",
  "Back-end Development",
  "Responsive web design",
  "Database management",
  "API integration",
  "Problem solving",
];


const detailOrQuote ="I am passionate about solving problems in new creative ways to drive innovation. My interest in technology drives me to constantly learn and explore new tools and frameworks.";

function About() {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
