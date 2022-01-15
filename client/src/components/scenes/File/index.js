import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.module.css';

const File = ({ data, name }) => {
  return (
    <figure>
      <Link to={data.url}>
        <img
          src={process.env.REACT_APP_SERVER_PATH + data.preview}
          alt='preview'
        />
      </Link>
      <figcaption>{name + '.psd'}</figcaption>
    </figure>
  );
};

File.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
};

export default File;
