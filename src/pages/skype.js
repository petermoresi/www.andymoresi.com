import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic06.jpg'
import windyLogo from '../assets/images/w-logo-large.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  render() {
    return (
      <Layout>
        <Helmet title="Andy Moresi - Musician in Los Angeles, CA" />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Skype with Andy</h2>
                  <h3>Lessons</h3>
                  <h4>Available in Pacific Standard Time</h4>
                  <p style={{ marginBottom: 10 }}>
                    This has rapidly become the most convinient way for students
                    and instructors to connect efficiently and work rapidly.
                  </p>
                  <p style={{ marginBottom: 10 }}>
                    Rates: $100/hour $65/half hour
                  </p>
                  <p style={{ marginBottom: 10 }}>
                    Call or text to schedule today!
                  </p>
                </header>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
