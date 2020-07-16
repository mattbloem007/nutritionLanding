import React from 'react'
import pic02 from '../assets/images/Heart-Opener-Cacao.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Nutritional Technology</h2>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Learn the culinary powers of food to rebuild and strengthen the nervouse system.
                Bringing back balance and attaining freater spiritual heights.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                In the pursuit of embodiment, one of the fundamental practices we engage in, is eating
                food for sustenance. How do we relate to food? What is true nourishment?
                What is sustenance? We take a deep look into these questions in this course
                in order to heal our relationship with food. This is a a huge gateway into fully
                expressing our spiritual nature as human beings - the essence of embodiment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
