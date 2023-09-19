import React from 'react'
import {Carousel} from "react-bootstrap"

function Hero() {
    return (
        <Carousel className="bg-warning text-dark h-100">
        <Carousel.Item>
          <div className="text-center py-5">
            <h1 className = "display-1">React.js</h1>
            <br />
            <p className="btn btn-dark" style={{width: "120px"}}>More Info</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="text-center py-5">
            <h1 className = "display-1">JavaScript</h1>
            <br />
            <p className="btn btn-dark" style={{width: "120px"}}>More Info</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="text-center py-5">
            <h1 className = "display-1">Bootstrap React</h1>
            <br />
            <p className="btn btn-dark" style={{width: "120px"}}>More Info</p>
          </div>
        </Carousel.Item>
      </Carousel>
    )
}

export default Hero
