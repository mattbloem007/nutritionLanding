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
                <h2>Detoxification is More Important than Nutrition</h2>
                <p>
                  Are you ready for an upgrade?
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
            <p>
            UPDATE: This cleanse is now open for anyone at anytime. Book now and go through your own two week transformation guided by Matthew Gabriel.
            All the information, guidance and support will be given by Matthew Gabriel as a one on one.
            </p>
              <p>
              UPDATE: This cleanse is now open for anyone at anytime. Book now and go through your own two week transformation guided by Matthew Gabriel.
              All the information, guidance and support will be given by Matthew Gabriel as a one on one.

                With the Corona virus floating around, many are stressing themselves from fear.
                The truth is NO virus can take root in a clean system.
                It is my intention to work in harmony with Nature to assist this precious cleaning time of the changing seasons with a powerful detox.
                This is never an easy task, it is deep shadow work that cleans all levels of our being.
                That is why this year, I have decided to invite a group to join me so we can assist each other as we all go through the same process.
                TOGETHER is always BETTER.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Are your energy levels not where they used to be when you were younger? Are you fighting on and off sicknesses?
                A cleanse will help you hit the reset button on your life.
                It is a way to stop ALL things that are creating dis-ease rather than looking for another cure.
                This is a key to find  balance on a physical, emotional, mental and spiritual level.
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
