import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2017 - 2022"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<AcademicCapIcon />}
      >
        <h4>Digital Humanities</h4>
        <h5>Bachelor of Science</h5>
        <ul className="text-base font-light">
          <li>Computer science applied in the humanities.</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2016 - 2017"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4>Community Manager</h4>
        <h5>Basislager Coworking</h5>
        <ul className="mt-4 text-left text-base font-light">
          <li>~ Event management</li>
          <li>
            ~ Community management <br />
            (Off- and Online)
          </li>
          <li>~ Organisation of event formats</li>
          <li>~ Facilitation of creative culture principles and values</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2018 - 2019"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4>Research</h4>
        <h5>Digital City Department</h5>
        <h5>City of Leipzig</h5>
        <ul className="mt-4 text-left text-base font-light">
          <li>
            ~ Automation programming and the digitalisation of bureaucratic
            processes
          </li>
          <li>
            ~ Project management and organisation of citizen-participation
            initiatives
          </li>
          <li>~ Research in the field of Smart Cities</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2019 - 2020"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4>Backend Developer</h4>
        <h5>eCommeleon</h5>
        <ul className="mt-4 text-left text-base font-light">
          <li>
            ~ Integrated Walmart marketplace, facilitating large transaction
            inserts to MySQL databases.
          </li>
          <li>~ Built Windows Desktop Applications to facilitate this.</li>
          <li>~ Responsible for writing technical documentation.</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2020 - 2021"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4>Front-End Developer</h4>
        <h5>Rhode & Schwarz Cybersecurity</h5>
        <ul className="mt-4 text-base font-light">
          <li>
            ~ Maintaining a frontend library with Angular, Typescript, SCSS
          </li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid white" }}
        date="2021 - 2022"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4>CMS Integrator</h4>
        <h5>Mogic GmbH</h5>
        <ul className="mt-4 text-base font-light">
          <li>~ Project work with Typo3 CMS, AlpineJS, SCSS, TailwindCSS</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
          border: "2px solid white",
          borderBottom: "2px",
        }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2022 - 2023"
        iconStyle={{ background: "rgb(var(--space))", color: "#fff" }}
        icon={<BriefcaseIcon />}
      >
        <h4 className="vertical-timeline-element-title">
          Code Camp Instructor
        </h4>
        <h5 className="vertical-timeline-element-subtitle">DevHaus</h5>
        <ul className="mt-4 text-base font-light">
          <li>~ Teaching web development with a frontend focus.</li>
          <li>~ React, NextJS, TailwindCSS, Zod, Typescript, ...</li>
        </ul>
        <p>Leipzig, Germany</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
