import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Shoaib</span> from{" "}
            <span className="purple">Kanpur, India.</span>
            <br />
            I am a passionate <span className="purple">MERN Stack Web Developer</span> skilled in technologies like{" "}
            <span className="purple">Next.js, BootStarp</span>, and many more.
            <br />
            I have completed my B.Tech in Computer Science from Maharana Pratap Engineering College.
            <br />
            <br />
            Apart from coding, here are some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading History and Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Critical Thinking & Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building — grow a little every day!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammad Shoaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
