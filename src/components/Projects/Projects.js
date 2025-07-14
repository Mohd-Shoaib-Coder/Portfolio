import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg"
import Ecommerce from "../../Assets/Projects/E-commerce.jpg"
import PodVerse from "../../Assets/Projects/PodVerse.png"
import Pinterest from "../../Assets/Projects/Pinterest.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="ByteBreakDown"
             description="A full-stack MERN blog application where users can create, edit, and delete their own blog posts. Other users can view and read blogs in a responsive, user-friendly interface. Built with MongoDB, Express.js, React, and Node.js, featuring user authentication and a clean markdown editor."
              ghLink="https://github.com/Mohd-Shoaib-Coder/Blog-App"
              demoLink="https://blog-app-frontend-tk9g.onrender.com"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="ShopKnock"
             description="A fully-featured MERN stack e-commerce application with user authentication powered by JWT, global state management using Redux Toolkit, and containerized deployment with Docker. Includes product listings, cart functionality, order placement, Stripe payment integration, and admin dashboard for product and order management."
              ghLink="https://github.com/Mohd-Shoaib-Coder/E-commerce"
              demoLink="https://e-commerce-frontend-5wyd.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pinterest}
              isBlog={false}
              title="PinterestClone"
            description="Pinterest Clone is a full-stack web application built with Node.js and EJS that replicates core features of Pinterest. Users can sign up, log in, and upload images with titles and descriptions. Uploaded content appears in a global feed and on user-specific profile pages. The app supports image uploads via Multer and uses session-based authentication for secure access. Designed to be responsive and user-friendly, this clone delivers a clean and modern image-sharing experience."
              ghLink="https://github.com/Mohd-Shoaib-Coder/PinterestClone"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PodVerse}
              isBlog={false}
              title="PodVerse"
            description="Podverse is a full-stack Next.js podcast platform where users can record, generate, and share audio podcasts. It features AI-powered image generation and OpenAI's Text-to-Speech (TTS) API, allowing creators to produce podcasts using a variety of realistic AI voices. Users can publish their episodes for others to stream, offering a modern, voice-first content experience."
              ghLink="https://github.com/Mohd-Shoaib-Coder/PodVerse"
              // demoLink=""
            />
          </Col>
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
