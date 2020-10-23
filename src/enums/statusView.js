import * as statuses from '../constants/viewDataStatus';
import TableData from '../components/pages/table.mock';
import proxy from './createProxy';

const DetectStatus = (viewStatus) => {
  if (statuses[viewStatus] !== undefined) {
    return TableData.viewData[viewStatus];
  }
  return '';
};

const newFun = proxy(DetectStatus);

export default newFun;
