import React, { Component } from "react"
import { Card, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="home">
          <Nav.Item as="li">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link className="nav-link" to="/faucet">
              Faucet
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" href="https://github.com/Pandaphobic/erc20-token" eventKey="link-2">
              GitHub
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    )
  }
}
