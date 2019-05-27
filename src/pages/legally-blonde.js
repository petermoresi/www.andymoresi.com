import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/guitar.jpg'
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
                  <h2>Legally Blonde</h2>
                  <h3>California State University at Northridge</h3>
                  <h4>2019 | Theatre Department</h4>
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
