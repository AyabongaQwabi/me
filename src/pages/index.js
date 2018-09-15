import React from 'react'
import './style.css';
import git from '../static/github.png';
import lnkd from '../static/linkedin.png';
import cdx from '../static/codex.svg';
import simsim from '../static/simsim.png';
import rfvn from '../static/roofvin.jpg';
class IndexPage  extends React.Component{
  constructor(){
    super();
    this.state ={
      menuOpen:false,
      playing: false,
      pos: 0
    };
  }
  render() {
    return (
      <div className='main'>
        <div className='info-wrapper'>
          <div className='info first'>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493461042&color=%236a13cc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <h3><strong>Album :</strong> <a href="https://soundcloud.com/qwabi-ayabonga/soliloquy?in=qwabi-ayabonga/sets/2nd-chapter">I Are </a> </h3>
        </div>
        <div className='info sec'>
          <div className='details'>
            <h1>Ayabonga Qwabi</h1>
            <h3>Maker of things</h3>
            <h3>Geek</h3>
            <h3>Developer</h3>
            <h3>9Gager</h3>
            <h3>Human</h3>
            <h3>Philosophy enthusiast</h3>
            <h3>Deep house lover</h3>
            <h3>Jack of many trades</h3>
            <h3>Master of some</h3>
            <h3>Wizard in web development</h3>
            <div className='footer'>
              <a href="https://github.com/AyabongaQwabi">
                <img className='git' src={git} />
              </a>
              <a href="https://www.linkedin.com/in/ayabongaqwabi/">
              <img className='lnkd' src={lnkd} />
              </a>
              <a href="htttp://www.projectcodex.co">
                <img className='cx' src={cdx} />
              </a>
          </div>
          </div>
          <div className='dp'>
            <img src={simsim} />
          </div>
          
        </div>
        </div>

        <div className='images'>
          <img className='fishhead' src={rfvn}/>
        </div>


      </div>
    )
  }
}

export default IndexPage
