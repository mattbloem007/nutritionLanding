import React from 'react'
import pic03 from '../assets/images/love-cacao.png'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const TwoTwo = props => (
  <section
    id="two"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
      <div className="container">
      <div className="row">
      <div className="col-4 col-12-medium">
        <header>
          <h2>Two Week Protocol</h2>
        </header>
        </div>
        <div className="col-4 col-12-medium">
        <p>
          <h4>Week One Protocol</h4>
          All liquids throughout the day with one meal for either lunch or dinner.
          This meal is best to contain lots of vegetables raw and/or cooked.
          Focus on getting different colours in the meal and good sources of fiber.
          It is best to refrain from dairy and meat.
          Eggs are ok as long as they are free range.
          Slowly reduce the intake of eggs as the cleanse progresses.
          Liquids can be juices, teas, smoothies and soups.
        </p>
        </div>
        <div className="col-4 col-12-medium">
        <p>
          <h4>Week Two Protocol</h4>
          All liquids throughout the day.  Liquids can be juices, teas, smoothies and soups.
          Slowly reduce the fiber intake by having more water, teas and juices.
        </p>
        </div>
      </div>
      </div>
      </div>
    </Fade>
    <ScrollLink
      to="three"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default TwoTwo
