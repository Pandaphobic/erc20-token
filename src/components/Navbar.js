import React, { Component } from "react"
import { Card, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="home">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/faucet">
              Faucet
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" href="https://github.com/Pandaphobic/erc20-token">
              GitHub
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    )
  }
}
