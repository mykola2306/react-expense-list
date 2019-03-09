import React from 'react';
import { Link } from 'react-router-dom'

const Portfolio = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the following things i have done</p>
    <Link to="/portfolio/11">Item one</Link>
    <Link to="/portfolio/22">Item two</Link>
  </div>
)

export default Portfolio;