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
          <h2>What you will learn</h2>
        </header>
        </div>
        <div className="col-4 col-12-medium">
        <p>
          <h4>Nutritional tools</h4>
            Certain superfood and superherbs that will transform your daily food into medicine which can heal
            and unlock the hidden potentials within.
        </p>
        </div>
        <div className="col-4 col-12-medium">
        <p>
          <h4>Personalised Lifestyle</h4>
          Practices and information in this course are the buidling blocks to a personalised
          lifestyle that will support your needs in life
        </p>
        </div>
        <div className="col-4 col-12-medium">
        <p>
          <h4>Prayer in the Kitchen</h4>
          We will explore the idea of the sacredness of food thorugh conscious ceremony/praryer. This is
          an important and forgotten nutrient that has a powerful impact on how we preapre and receive
          nourishment.
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
