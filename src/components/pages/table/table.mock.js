import React from 'react';
import StatsUp from '../../../icons/StatsUp';
import StatsDown from '../../../icons/StatsDown';

const tableData = {
  statusData: {
    Published: 'success-status',
    Draft: 'error-status',
    Scheduled: 'warning-status'
  },
  viewData: {
    up: <StatsUp />,
    down: <StatsDown />
  }
};

export default tableData;
