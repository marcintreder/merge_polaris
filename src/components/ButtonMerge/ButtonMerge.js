import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@shopify/polaris';

const ButtonMerge = (props) => {
  return (
      <Button {...props}>
        {props.children}
      </Button>
  );
};

ButtonMerge.propTypes = {
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.string,
  size: PropTypes.oneOf(['slim', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  url: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  plain: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,

}

export { ButtonMerge as default };
