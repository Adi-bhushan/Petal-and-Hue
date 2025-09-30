import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // 1. Import Image

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            {/* 2. Add your image here */}
            <Image 
              src="/images/developer.jpg" 
              alt="Developer" 
              roundedCircle 
              className="developer-img" 
            />
            
            <p className="mt-2">
              Developed by Aditi Bhushan &copy; {new Date().getFullYear()} |
              <a 
                href="https://github.com/Adi-bhushan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ms-2 me-2"
              >
                <i className="fab fa-github"></i>
              </a> 
              |
              <a 
                href="https://www.linkedin.com/in/aditi-bhushan-a4944b293/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ms-2"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </p>
            <p>Copyright &copy; Petal and Hue</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;