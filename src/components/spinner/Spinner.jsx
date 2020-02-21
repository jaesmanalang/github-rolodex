import React, { Fragment } from 'react';
import './Spinner.scss';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img className="loading-spinner" src={spinner} alt="loading..." />
  </Fragment>
);

export default Spinner;
