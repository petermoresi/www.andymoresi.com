import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/0.jpeg'
import windyLogo from "../assets/images/w-logo-large.png"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Andy Moresi - Musician in Los Angeles, CA" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Making music and more</h2>
                </header>
                <p>I have been playing music my whole life. I began songwriting at a very young age, almost quite by accident. Before I knew it, piano lessons and singing in school and church choirs occupied much of my time. Over the years I have had the privilege to study, rehearse and perform in many different musical environments with the most amazing musicians on earth.</p>
                <p>
                  My studio recording experience began at 16 with my first trio (debut on guitar). My first road gig, at 17, in New Orleans as guitarist for The Lutheran Church Missouri Synod's national youth gathering jazz band, performing for over 32 thousand attendees. As a freelance musician. I enjoy working on concerts and projects with all sorts of singers and songwriters. I also perform regularly in musical theatre orchestras and have composed for film and television.
                </p>
                <p>
                  I am a member of The American Federation of Musicians (AFM) Local 47 chapter. Thanks to my family and friends that help, support and guide my path in life, heath and career...my work is dedicated to all of the wonderful musicians and teachers that gave me so much inspiration.
                </p>
                {/* <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul> */}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Discography</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1">
                  <a href="http://windyhillstudioaustin.com/" style={{ borderBottom: 'none'}}><img src={windyLogo} style={{ border: '1px solid #CCC', borderRadius: 110, maxWidth: 220, minHeight: 220 }} /></a>
                </span>
                <h3>Windy Hill Studio Austin</h3>
                <p>Producer and session credits: 
                <br></br>Slow Cooked, Cole McCabe, and Mathias Clark.</p>
              </li>
              <li>
                <span className="icon major style3 fa-music"></span>
                <h3>Greater Los Angeles</h3>
                <p>Being my home, I work here most of the time and have had the privaledge to work with and record with many of the most amazing artists on earth! <br/>Jabudah <br/>Annabella Lwin/Bow Wow Wow <br></br>Kevin Hiatt Big Band.</p>
              </li>
              <li>
                <span className="icon major style5 fa-coffee"></span>
                <h3>American Mutt Studio</h3>
                <p>Open since 2007, we have produced recording for everything from full audio replacement in a docu-short and demos for songwriters to sound reels for voiceover artists. On occasion, I even sometimes pen an original tune out myself in this terrific room!</p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Live Tours &amp; Theatre Credits</h2>
            </header>
            <h3>2019</h3>
            <ul className="features">
              <li>
                Legally Blonde
              </li>
              <li>
                We Will Rock You
              </li>
              <li>
                9 to 5
              </li>
            </ul>
            <h3>2018</h3>
            <ul className="features">
              <li>
                West Side Story 
              </li>
              <li>
                Oklahoma
              </li>
              <li>
                Thoroughly Modern Millie 
              </li>
              <li>
                Sister Act
              </li>
            </ul>
            <h3>2017</h3>
            <ul className="features">
              <li>
                Guitarist for Bow Wow Wow (US national tour with The Romantics, The Smithereens, The Motels)
              </li>
              <li>
                Ventura County Fair - Performed at Firestone 805 garden with Blue Latitude
              </li>
              <li>
                Hair
              </li>
              <li>
                Bring It On
              </li>
              <li>
                Big Fish
              </li>
              <li>
                The Wannabe (SAG Television Pilot)
              </li>
              <li>
                Bat boy
              </li>
            </ul>
            <h3>2016</h3>
            <ul className="features">
              <li>
                In The Heights
              </li>
              <li>
                Skullduggery
              </li>
              <li>
                Hairspray
              </li>
              <li>
              Late Bloomers (SAG Television Pilot)
              </li>
            </ul>
            {/* <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul> */}
            {/* <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          {/* <section id="cta" className="main special">
            <header className="major">
              <h2>Catalog</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}

        </div>

      </Layout>
    )
  }
}

export default Index
