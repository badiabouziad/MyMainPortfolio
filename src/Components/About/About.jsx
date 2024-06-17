import "./About.css";
import { LiaHtml5 } from "react-icons/lia";
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

function About() {
  const magnify5 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("magnify-5");
  };

  const removeMagnify5 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("magnify-5");
  };
  return (
    <div  className="about">
      <div className="container">
        <h1 id="about">About Me</h1>
        <p>
          Hi there! <strong>I'm Badia Bouziad</strong>, a passionate web
          developer with a knack for crafting all sorts of websites. At 22 years
          old, I've already honed my skills in various areas of web development.
          I hold a <strong>Master's degree </strong>
          in Computer Science, specializing in creating{" "}
          <strong>robust and efficient</strong> web applications. My journey
          into the world of coding began with <strong>HTML</strong> and{" "}
          <strong>CSS</strong>, and since then, I've expanded my expertise to
          include a variety of technologies. Such as{" "}
          <strong>React js , Node.js , SCSS , SQL , Python.</strong>
        </p>
        <div className="learned-tech">
          <LiaHtml5
            className="techs child-1"
            onMouseOver={magnify5}
            onMouseOut={removeMagnify5}
          />
          <BsFiletypeScss
            className="techs child-2"
            onMouseOver={magnify5}
            onMouseOut={removeMagnify5}
          />
          <FaReact
            className="techs child-3"
            onMouseOver={magnify5}
            onMouseOut={removeMagnify5}
          />
          <FaNodeJs
            className="techs child-4"
            onMouseOver={magnify5}
            onMouseOut={removeMagnify5}
          />
          <TbSql
            className="techs child-5"
            onMouseOver={magnify5}
            onMouseOut={removeMagnify5}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
