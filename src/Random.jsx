import React, { Component }from 'react'
 export default class Random extends Component {
    constructer(){
        super()
        this.state={car:"Polo GT TSI"}
    }
    render(){
        return(
            <div>Inside Random Component
                <h4> Car Name:{this.state.car}</h4>
                <button></button>

            </div>
        )
    }
 }


function Random() {
  return (
    <div>Random</div>
  )
}

