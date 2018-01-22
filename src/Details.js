import React, { Component } from 'react';
import './css/Details.css';
import details from './data/details.json';

class Details extends Component {

  render() {
    return (
      <div className='wrapper'>
        <h1>Details</h1>
        <h4>(Links on images)</h4>

        <section class='portfolio-full'>
          <div class='wrapper'>
            {details.map((d, i) => (
              <figure>
                <h3>{d.title}</h3>
                <a href={d.link} target="_blank" rel="noopener noreferrer">
                  <img src={d.image} alt={d.title}/>
                </a>
                <figcaption>{d.description}
                  <p><b>Stack:</b> {d.stack}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default Details;
