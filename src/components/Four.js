import React from 'react'
import Fade from 'react-reveal/Fade'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Here's What is Included</h2>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane"></span>
              <h3>Group Chats</h3>
              <p>
                Feel supported and motivated with all those doing the course in our Telegram group chat.
                Ask questions and receive answers through group discussions.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-video"></span>
              <h3>Weekly Live Zoom Calls</h3>
              <p>
                Receive guidance and insights for the 6 modules from Matthew, Gabriel.
                Share stories and intentions with everyone in the group.
                Make notes and ask questions.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-info-circle"></span>
              <h3>Informational PDF Guides, Videos, and Links</h3>
              <p>
                Receive downloadable information on all the topics and practices covered for the course.
                All resources will be available for your convenience and deep study.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-capsules"></span>
              <h3>A Nutritional Bundle (Optional)</h3>
              <p>
                Superherbs and superfoods that will be discussed during this course. These can be used
                to enhance your learning abilities.
                The use and practices of this bundle will also provide a visceral experience
                of the transmission provided during this course.
              </p>
            </section>
          {/**<section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-file"></span>
            <h3>Odio laoreet accumsan</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
              orci porttitor.
            </p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-lock"></span>
            <h3>Massa arcu accumsan</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
              orci porttitor.
            </p>
          </section>**/}
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a target="_blank" href="http://41.185.8.137/~xic02/alchemyofremembrance/" className="button">
                Sign Me Up for the Course
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
