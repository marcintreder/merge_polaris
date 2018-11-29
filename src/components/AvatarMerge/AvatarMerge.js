import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from '@shopify/polaris';

const AvatarMerge = (props) => {
  return (
      <Avatar {...props} />
  );
};

AvatarMerge.propTypes = {
  source: PropTypes.string,
  size: PropTypes.oneOf(['slim', 'medium', 'large']),
  name: PropTypes.string,
  initials: PropTypes.string,
  children: PropTypes.string,
  customer: PropTypes.bool
}

export { AvatarMerge as default };
