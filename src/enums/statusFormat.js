import * as statuses from "../constants/statuses";

import proxy from "./createProxy";

import TableData from "../components/pages/table/table.mock";

const DetectStatus = (viewStatus) => {
  if (statuses[viewStatus] !== undefined) {
    return TableData.statusData[viewStatus];
  }
  return "";
};

const newFun = proxy(DetectStatus);

export default newFun;
