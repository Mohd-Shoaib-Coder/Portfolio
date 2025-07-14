import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMsqlServer,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <FaHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      
    </Row>
  );
}

export default Techstack;
