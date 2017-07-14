import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija'
};

const Logo = ({type = TYPE.BRAINLY}) => {

  const logoClass = classnames('sg-logo', {
    [`sg-logo--${type}`]: type !== TYPE.BRAINLY
  });

  const logoPath = `images/logos/${type}.svg`;

  return <div className={logoClass}>
    <img className="sg-logo__image" src={logoPath}/>
  </div>;
};

Logo.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE))
};

export default Logo;
export {TYPE};
