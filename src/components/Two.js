import React from 'react'
import pic03 from '../assets/images/love-cacao.png'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Mystical Art meets Solid Science</h2>
          <p>A 6 week Journey of Understanding the Human Body</p>
        </header>
        <p>
          This teaching will bring the understanding of the intricate relationship between food
          and our state of being. IxCacao is both a superfood and a Hand Maiden who will
          support you during your deep study of how the body works physically and energetically.
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

export default Two
