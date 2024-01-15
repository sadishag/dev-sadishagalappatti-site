import AboutMe from "./AboutMe";
import Timeline from "./Timeline";

import timelineElements from "./timelineElements";

const technologies = timelineElements.map((e) => e.technologyUsed);

const Section = () => {
  return (
    <>
      <AboutMe />
      <Timeline timelineElements={timelineElements} />
    </>
  );
};

export default Section;
