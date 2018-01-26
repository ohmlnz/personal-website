import React, { Component } from 'react';
import './css/Homepage.css';
import portfolio from './data/portfolio.json';

class Homepage extends Component {
  state = {
    display: false
  }

  showMenu = () => {
    const menu = document.querySelector('.menu-mobile');
    const lis = menu.getElementsByTagName('li');
    const display = this.state.display? 'none' : 'block';

    Array.from(lis).forEach((e, i) => { if (i !== 0) return e.style.display = display; });

    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div className='wrapper'>
        <section id='intro'>
      	 <nav>
      		 <ul className='menu-desktop'>
      		  	<li><a href='#intro'>home</a></li>
      		  	<li><a href='#about'>about</a></li>
      			 	<li><a href='#portfolio'>portfolio</a></li>
      			 	<li><a href='#skills'>skills</a></li>
      		  	<li id='contact-menu'><a href='#contact'>contact</a></li>
      		</ul>
      		<ul className='menu-mobile' onClick={this.showMenu}>
      			<li><a href='#intro'>home</a><i className="fa fa-bars" aria-hidden="true"></i></li>
      	  	<li><a href='#about'>about</a></li>
      		 	<li><a href='#portfolio'>portfolio</a></li>
      		 	<li><a href='#skills'>skills</a></li>
      	  	<li><a href='#contact'>contact</a></li>
      		</ul>

      	 </nav>
      	 <article>
      		 <h1>Front end developer - Digital marketing specialist</h1>
      		 <div id='buttons'>
      		 	<span><a href="mailto:othman.lanizi@gmail.com">contact</a></span>
      		 	<span><a href="https://goo.gl/jXwdwx" target="_blank" rel="noopener noreferrer">Resume</a></span>
      		 </div>
      	</article>
      </section>
      <section id='about'>
       	<header>
       		<h1>About me</h1>
       	</header>
       	<article>
       		<p>Born and reared in Montpellier, in the South of France, Othman first became interested in computer programming when, at the age of 12, he started to handle and tweak private servers, build websites using PHP and MySQL, and develop video games in Lua. His passion for programming never faltered and he has since continued to work on side projects while dedicating his studies to understanding the mechanics of the corporate world.</p>
       		<p>Othman Lanizi received his BA in Business Administration from La Trobe University in Australia and his MBA from Montpellier Business School in France. His expertise lies in digital marketing, and how to interact and customize user interfaces to positively affect customers’ behavior. </p>
       		<p>As a Front-End Developer, Othman combines his marketing knowledge with his programming skills to address issues in a creative way. Othman is an avid learner and his self-taught repertoire of technologies includes the latest stacks. </p>
       		<p>Othman’s mother is French, and his father is Moroccan; he speaks French and basic Arabic and Japanese. He has chaired a French chapter of a youth mentoring program and during his free time he enjoys playing tennis and biking.</p>
       	</article>
      </section>
      <section id='portfolio'>
      	<header>
       		<h1>Portfolio</h1>
      	</header>
       	<article>
       		<ul className="slider">
            {portfolio.map((p, i) => (
              <li key={i}>
                <figure>
                  <a href={p.href} target="_blank"><img src={p.image} alt="portfolio preview"/></a>
                  <figcaption>{p.caption}</figcaption>
                </figure>
              </li>
            ))}
      		</ul>
      		<span>
      			<a href="/details">See more</a>
      		</span>
       	</article>
      </section>
      <section id='skills'>
      	<header>
      		<h1>Skills</h1>
      	</header>
       	<article>
      	 	<ul>
      	     	<li><strong>Tech stack</strong></li>
      	        <li>JavaScript - jQuery - Node</li>
      	        <li>React - React Native - Express - Ember</li>
      	        <li>Redux - Firebase - MongoDB - Heroku</li>
      	        <li>SCSS - WordPress</li>
      	    </ul>
      	    <ul>
      	        <li><strong>Tools</strong></li>
      	        <li>Git</li>
      	        <li>Sublime - Atom</li>
      	        <li>Photoshop - Blender</li>
      	        <li>Xcode</li>
      	    </ul>
      	 </article>
      </section>
      <section id='contact'>
      	<header>
      		<h1>Contact</h1>
      	</header>
      	<article>
      		<p>Interested in collaborating or hiring me? Let's get in touch!</p>
      	 	<ul>
      			<a href="mailto:othman.lanizi@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>.</a>
      			<a href="https://linkedin.com/in/othmanlanizi" target='_blank'rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i>.</a>
      			<a href="https://github.com/OthmanLan" target='_blank' rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i>.</a>
      			<a href="tel:+9148265280"><i className="fa fa-mobile" aria-hidden="true"></i>.</a>
      	 	</ul>
      	  <div id='social-media'></div>
       </article>
      </section>
      <span id='bottom'><a href='#intro'><img src={require('./images/arrow.png')} alt='upward arrow'/></a></span>
    </div>
    );
  }
}

export default Homepage;
