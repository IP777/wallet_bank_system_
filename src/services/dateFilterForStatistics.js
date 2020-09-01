export const dateFilterForStatistics = (dataChart, mounth, year) => {
  if (!mounth & !year) {
    return dataChart;
  }
  if (!year) {
    return dataChart.filter((item) => item.createdAt.mounth === mounth);
  }
  if (!mounth) {
    return dataChart.filter((item) => item.createdAt.year === year);
  }
  return dataChart.filter(
    (item) =>
      (item.createdAt.mounth === mounth) & (item.createdAt.year === year)
  );
};
