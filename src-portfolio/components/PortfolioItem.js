import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>A thing i have Done</h1>
    <p>Item i have done with id {props.match.params.id}</p>
  </div>
)

export default PortfolioItem;