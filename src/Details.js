import React, { Component } from 'react';
import './css/Details.css';
import details from './data/details.json';

class Details extends Component {

  render() {
    return (
      <div className='wrapper'>
        <h1>Details</h1>
        <h4>(Links on images)</h4>

        <section className='portfolio-full'>
          <div className='wrapper'>
            {details.map((d, i) => (
              <div className='sub-wrapper' key={i}>
                {d.map((p, i) => (
                  <figure key={i}>
                    <h3>{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <img src={p.image} alt={p.title}/>
                    </a>
                    <figcaption>{p.description}
                      <p><b>Stack:</b> {p.stack}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default Details;
