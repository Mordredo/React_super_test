import React from 'react';
import StatsUp from '../../icons/StatsUp';
import StatsDown from '../../icons/StatsDown';

const tableData = {
  statusData : {
    published : {
      status: 'Published',
      response: 'success-status'
    },
    draft : {
      status: 'Draft',
      response: 'error-status'
    },
    scheduled: {
      status: 'Scheduled',
      response: 'warning-status'
    }
  },
  viewData: {
    'up': <StatsUp />,
    'down': <StatsDown />
  }
};

export default tableData;
