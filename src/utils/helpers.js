export const convertDataToChart = (data = {}) => {
  if (Object.keys(data).length > 0) {
    const keys = Object.keys(data);

    let tempChartArr = [];

    for (let key of keys) {
      const chartValues = data[key];
      const chartKeys = Object.keys(chartValues);

      let tempChartDataArr = [];

      chartKeys.forEach((chartKey) => {
        const tempValues = {
          primary: key.toUpperCase(),
          secondary: chartValues[chartKey],
        };
        tempChartDataArr = [tempValues];
        const tempData = { label: chartKey, data: tempChartDataArr };
        tempChartArr.push(tempData);
      });
    }

    return tempChartArr;
  }
};
