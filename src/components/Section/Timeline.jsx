import WorkIcon from "./work.svg?react";
import SchoolIcon from "./school.svg?react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const handleDescription = (exp_id, description) => {
  return (
    <>
      <ul id="description-list">
        {description.map((e, idx) => {
          return <li key={`${exp_id}-${idx}`}>{e}</li>;
        })}
      </ul>
    </>
  );
};

const Timeline = ({ timelineElements }) => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <>
      <section id="experience">
        <h2>Experience</h2>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton = element.buttonText;
            return (
              element.enabled && (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.company} | {element.location}
                  </h5>
                  {handleDescription(element.id, element.description)}
                  {showButton && (
                    <a
                      // className={`button ${
                      //   isWorkIcon ? workButton : schoolButton
                      // }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                  {element.technologyUsed && (
                    <h6>{element.technologyUsed.join(" | ")}</h6>
                  )}
                </VerticalTimelineElement>
              )
            );
          })}
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Timeline;
