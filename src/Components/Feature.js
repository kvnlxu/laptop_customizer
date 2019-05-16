import React from 'react';
import './Feature.css';

function Feature(props) {
  return (
    <div className="feature" key={props.featKey}>
      <div className="feature__name">{props.featKey}</div>
      <ul className="feature__list">
        {props.options}
      </ul>
    </div>
  )
}

export default Feature;