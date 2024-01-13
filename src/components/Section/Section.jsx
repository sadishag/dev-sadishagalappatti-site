import AboutMe from "./AboutMe";
import Timeline from "./Timeline";

import timelineElements from "./timelineElements";

const technologies = timelineElements.map((e) => e.technologyUsed);

const Section = () => {
  return (
    <>
      <AboutMe />
      <Timeline timelineElements={timelineElements} />
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: sadishag@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sadishag"
            target="_blank"
            rel="noopener noreferrer"
          >
            sadishag
          </a>
        </p>
        {/* Add more contact information or social media links as needed */}
      </section>
    </>
  );
};

export default Section;
