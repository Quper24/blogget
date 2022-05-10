import React from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LogoIcon} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? (
      auth
    ) : (
      <LogoIcon className={style.svg} />
    )}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
