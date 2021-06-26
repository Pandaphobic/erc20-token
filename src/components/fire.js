import React from "react"
import "../components/campfireStyle.scss"

// ORIGINAL LAYOUT BY https://codepen.io/RominaMartin/pen/KrqMVw
export default function Fire(props) {
  return (
    <div className="content" onClick={props.onClick}>
      {/* <div className="light"></div> */}
      <div className="fire">
        <div className="back"></div>
        <div className="medium"></div>
        <div className="front"></div>
      </div>
      <div className="wood">
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </div>
  )
}
