import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import {AiFillGithub,} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mohd Shoaib</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Mohd-Shoaib-Coder"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/916391811768"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohd-shoaib-49002a268/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:000sheikhsiddiqui@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdOutlineEmail  />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
