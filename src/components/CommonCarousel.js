import "./CommonCarouselStyle.css"

import React, { Component } from 'react'

class CommonCarousel extends Component {
  render() {
    return (
      <div className="carouselProject">
        <div className="carouselHeading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default CommonCarousel
