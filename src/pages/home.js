import React, { Component } from "react"
import { Image, Card, Col, Button, Container, Nav, Row } from "react-bootstrap"
const networkName = "localhost:3000"

const cardStyle = {
  borderRadius: "25px",
  margin: "auto",
  maxWidth: "34rem"
}
export default class home extends Component {
  render() {
    return (
      <Container style={{ marginTop: "2em" }}>
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#home">
                  <Nav.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link disabled>Faucet</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" href="https://github.com/Pandaphobic/erc20-token" eventKey="link-2">
                      GitHub
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>

              <Card.Body>
                <Card.Title>Connect Your Wallet to Get Started!</Card.Title>
                <Card.Text>Use your Metamask wallet and connect to {networkName}</Card.Text>
                <Row>
                  <Col>
                    <Button className="btn btn-block" style={{ borderRadius: "10px" }} variant="warning" block>
                      Connect
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
