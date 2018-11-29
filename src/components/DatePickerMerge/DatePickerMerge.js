import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from '@shopify/polaris';

export default class DatePickerMerge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 1,
            year: 2018,
            selected: {
                start: new Date('Wed Nov 07 2018 00:00:00 GMT-0500 (EST)'),
                end: new Date('Wed Nov 07 2018 00:00:00 GMT-0500 (EST)'),
              }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
    }

    handleChange(value) {
        this.setState({selected: value});
      };
    
      handleMonthChange(month, year) {
        this.setState({
          month,
          year,
        });
      };
  
    render() {
      const {month, year, selected} = this.state;
  
      return (
        <DatePicker
          month={month}
          year={year}
          onChange={this.handleChange}
          onMonthChange={this.handleMonthChange}
          selected={selected}
        />
      );
    }
  }