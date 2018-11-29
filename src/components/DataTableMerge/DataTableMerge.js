import React from 'react';
import PropTypes from 'prop-types';
import {DataTable} from '@shopify/polaris';

const DataTableMerge = (props) => {
    return (
        <DataTable {...props} />
    );
  };
  

  DataTableMerge.propTypes = {
    columnContentTypes: PropTypes.arrayOf(PropTypes.string),
    headings: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.array,
    totals: PropTypes.array,
    truncate: PropTypes.bool
}

export { DataTableMerge as default};