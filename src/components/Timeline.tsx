import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jul 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Motion Graphic Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              DViO Digital, Pune, IND
            </h4>
            <div>
              <ul>
                <li>
                  {" "}
                  Responsible for Conceptualize, storyboard, and produce
                  high-quality motion graphics and animations for digital
                  campaigns, AR experiences, and 3D/CGI projects.
                </li>
                <li>
                  Used After Effects, Premiere Pro, and Blender to bring briefs
                  to life, collaborate with creative teams across seven brands,
                  and consistently deliver engaging visuals on tight deadlines.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2023 - Jul 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Motion Graphic Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Postcard India, Pune, IND
            </h4>
            <div>
              <ul>
                <li>
                  {" "}
                  Created engaging motion graphics for marketing campaigns,
                  resulting in a 30% increase in user engagement
                </li>
                <li>
                  {" "}
                  Collaborated with the marketing team to conceptualize and
                  execute visual designs for promotional videos
                </li>
                <li>
                  {" "}
                  Utilized Adobe After Effects and Cinema 4D to produce visually
                  striking animations and visual effects
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020 - Feb 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Video Editor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Malganga Computer, Pune, IND
            </h4>
            <div>
              <ul>
                <li>
                  {" "}
                  Developed educational video content to facilitate remote
                  learning for students during the pandemic.
                </li>
                <li>
                  {" "}
                  Digitized educational material to enhance accessibility and
                  engagement for remote learning.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
