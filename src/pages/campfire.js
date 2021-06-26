import React from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import Fire from "../components/fire"

export default function Campfire() {
  const handleClick = () => {
    console.log("Fire Clicked")
  }
  return (
    <Card.Body>
      <Card.Title>Burn You CALI Tokens!</Card.Title>
      <Row>
        <Card.Text>Throw your CALI Tokens in the fire for no reason!</Card.Text>
      </Row>

      <Row className="mb-4 mt-5">
        <Col className="mb-5 mt-5">
          <Fire onClick={handleClick} />
        </Col>
      </Row>
    </Card.Body>
  )
}
