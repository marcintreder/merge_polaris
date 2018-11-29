import React from 'react';
import PropTypes from 'prop-types';
import {ColorPicker} from '@shopify/polaris';

export default class ColorPickerMerge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(color) {
        this.setState({color});
      };
  
    render() {
      const {color} = this.state;
  
      return <ColorPicker onChange={(color) => this.handleChange(color)} color={color} />;
    }
  
  }

  ColorPickerMerge.propTypes = {
    allowAlpha: PropTypes.bool,
    color: PropTypes.shape({
        alpha: PropTypes.number,
        brightness: PropTypes.number,
        hue: PropTypes.number,
        saturation: PropTypes.number
    })
}