import React from 'react'
import pic01 from '../assets/images/detox.jpeg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">

      <span className="container">
        <iframe src="https://player.vimeo.com/video/400223974" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </span>
      <br/>
      <header>
        <h2>22 April - 06 May 2020</h2>
        <p>
          Feel good, Look good, Do Good
          <br />
          Step into your BEST self.
        </p>
      </header>
    </div>
    <ScrollLink
      to="one"
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

export default Banner
