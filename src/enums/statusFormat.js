// import createEnum from './createEnum';
//
// import TableData from '../components/pages/table.mock';
//
// export const statusNew = createEnum(TableData.statusData);

import * as statuses from '../constants/statuses';
import TableData from '../components/pages/table.mock';
import proxy from './createProxy';

const DetectStatus = (viewStatus) => {
  if (statuses[viewStatus] !== undefined) {
    return TableData.statusData[viewStatus];
  }
  return '';
};

const newFun = proxy(DetectStatus);

export default newFun;
