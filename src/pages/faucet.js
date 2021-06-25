import React, { Component, useState, useEffect } from "react"
import { Card, Button, Row } from "react-bootstrap"
import MetaMaskOnboarding from "@metamask/onboarding"

const ONBOARD_TEXT = "Click here to install MetaMask!"
const CONNECT_TEXT = "Connect"
const CONNECTED_TEXT = "Connected"

export function OnboardingButton() {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = useState(false)
  const [accounts, setAccounts] = useState([])
  const onboarding = React.useRef()

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT)
        setDisabled(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText(CONNECT_TEXT)
        setDisabled(false)
      }
    }
  }, [accounts])

  useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts)
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(handleNewAccounts)
      window.ethereum.enable("accountsChanged", handleNewAccounts)
    }
  }, [])

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(newAccounts => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  return (
    <Button disabled={isDisabled} onClick={onClick} className="btn w-50 m-auto" style={{ borderRadius: "10px" }} variant={isDisabled ? "success" : "warning"} block>
      {buttonText}
    </Button>
  )
}

export default class Faucet extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>CALI Faucet!</Card.Title>
        <Card.Text>Use the button below to connect to your wallet! Once connected, turn on the faucet and receive 1 Calista Token</Card.Text>
        <Row style={{ width: "70%" }} className="m-auto mb-2">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="faucet" class="svg-inline--fa fa-faucet fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#4da7cd" d="M352,256H313.39c-15.71-13.44-35.46-23.07-57.39-28V180.44l-32-3.38-32,3.38V228c-21.93,5-41.68,14.6-57.39,28H16A16,16,0,0,0,0,272v96a16,16,0,0,0,16,16h92.79C129.38,421.73,173,448,224,448s94.62-26.27,115.21-64H352a32,32,0,0,1,32,32,32,32,0,0,0,32,32h64a32,32,0,0,0,32-32A160,160,0,0,0,352,256ZM81.59,159.91l142.41-15,142.41,15c9.42,1,17.59-6.81,17.59-16.8V112.89c0-10-8.17-17.8-17.59-16.81L256,107.74V80a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16v27.74L81.59,96.08C72.17,95.09,64,102.9,64,112.89v30.22C64,153.1,72.17,160.91,81.59,159.91Z"></path>
          </svg>
        </Row>
        <Row>
          <OnboardingButton />
        </Row>
      </Card.Body>
    )
  }
}
