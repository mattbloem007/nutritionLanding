import React from 'react'
import pic04 from '../assets/images/me.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${pic04})` }}
  >
    <span className="image fit main bottom">
      <img src={pic04} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>Who Am I?</h2>
        </header>
        <p>
        My name is Matthew Bloemetje. We were designed to be extraordinary and I am just a regular human being on the path of becoming an extraordinary being.
        I am a graduated, yet ever learning Sangoma and Cacao Kuchina.
        </p>
        <p>
        My ancestral name is Gabriel, from the Archangel Gabriel, whom I am honoured to be working with.
        As a facilitator, I have been blessed to unlock the ancient knowledge about nutrition and body-work healing.
        I have a complex understanding about the inner and outer workings of the body and brain and how to best optimize their functioning.
        </p>
        <ul className="actions">
          <li>
            <a target="_blank" href="http://41.185.8.137/~xic02/alchemyofremembrance/" className="button">
              Join The Course
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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

export default Three
