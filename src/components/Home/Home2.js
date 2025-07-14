import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Shoaib4.jpg";
import Tilt from "react-parallax-tilt";
import { FaWhatsapp } from "react-icons/fa";
import {AiFillGithub,} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I’m a dedicated full-stack web developer with strong foundations in both frontend and backend technologies.
  <br /><br />
  I have a good command over
  <i>
    <b className="purple"> HTML, Tailwind CSS, Bootstrap, React, Next.js, and TypeScript</b>
  </i>, building fast, responsive, and modern user interfaces.
  <br /><br />
  On the backend side, I work with
  <i>
    <b className="purple"> Node.js, Express.js, and MongoDB</b>
  </i>, creating scalable APIs and full-stack applications.
  <br /><br />
  I also have solid experience in
  <i>
    <b className="purple"> Java and SQL</b>
  </i> and have solved Data Structures and Algorithms (DSA) problems extensively using Java.
  <br /><br />
  I have a good working knowledge of
  <i>
    <b className="purple"> Linux commands and Docker</b>
  </i> as part of my DevOps interests, and I’m currently exploring
  <i>
    <b className="purple"> Shell Scripting</b>
  </i> to enhance my automation and deployment skills.
  <br /><br />
  I'm passionate about building efficient products, automating workflows, and continuously expanding my technical horizon.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #6c63ff",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mohd-Shoaib-Coder"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/916391811768"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohd-shoaib-49002a268/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:000sheikhsiddiqui@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdOutlineEmail  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

