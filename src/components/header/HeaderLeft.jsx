import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderLeft = ({children, className, ...props}) => {
  const headerClass = classnames('sg-header__left', className);

  return (
    <div {...props} className={headerClass}>
      {children}
    </div>
  );
};

HeaderLeft.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HeaderLeft;
