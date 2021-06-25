import React, { Component, useState } from "react"
import CalistaToken from "./contracts/CalistaToken.json"
import { ethers } from "ethers"

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
        {/* <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>If your contracts compiled and migrated successfully, below you should see the total CALI owned by the currently selected account</p>

        <div>
          The stored value is: <strong>{this.state.storageValue}</strong>
        </div> */}
      </div>
    )
  }
}

export default App
