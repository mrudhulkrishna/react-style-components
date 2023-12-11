import React from 'react'

const Header  = {
    padding: "10px 20px",
    textAlign: "center",
    color: "green",
    backgroundColor: "yellow"
};


function Comp2() {
  return (
    <div>
        <h2 style={Header}>Component 2 - style using object variable</h2>
    </div>
  )
}

export default Comp2