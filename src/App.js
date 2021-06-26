import React, { Component } from "react"
import { Image, Col, Container } from "react-bootstrap"
import CalistaTokenImage from "./assets/Calista Tokens.png"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainCard from "./components/MainCard"
import Faucet from "./pages/faucet"
import "./bootstrap.css"
import Home from "./pages/home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <style>@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');</style>
        <Container style={{ margin: "auto", maxWidth: "34rem" }}>
          <Col md="5"></Col>
          <Col>
            <Image src={CalistaTokenImage} fluid />
          </Col>
          <Col md="5"></Col>
        </Container>
        <Router>
          <Switch>
            <Route exact path={["/home", "/"]}>
              <MainCard page={<Home />} />
            </Route>

            <Route exact path="/faucet">
              <MainCard page={<Faucet />} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
