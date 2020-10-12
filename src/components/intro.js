import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "./intro.scss";

import coyote from "../assets/coyote-4JxlPhF33F8.jpg";
import racoon from "../assets/racoon-aOnkavapVm4-unsplash.jpg";
import skunk from "../assets/skunk-YoEA2dcDo0g-unsplash.jpg";

function Intro() {
  return (
    <div className="intro py-4 py-lg-5">
      <div className="container">
        <div className="col-10 col-md-8 mx-auto">
          <p className="py-1 py-md-2">
            We specialize in effective and responsible management of wildlife.
          </p>

          <ListGroup variant="flush">
            <ListGroup.Item>Nuisance animal control</ListGroup.Item>
            <ListGroup.Item>Wildlife exclusion techniques</ListGroup.Item>
            <ListGroup.Item>
              Consulting for overall wildlife management strategies
            </ListGroup.Item>
            <ListGroup.Item>
              Ecologically responsible management practices
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <Container className="team-photos py-5">
        <Row>
          <Col xs={4}>
            <Image src={skunk} roundedCircle fluid />
          </Col>
          <Col xs={4}>
            <Image src={racoon} roundedCircle fluid />
          </Col>
          <Col xs={4}>
            <Image src={coyote} roundedCircle fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
