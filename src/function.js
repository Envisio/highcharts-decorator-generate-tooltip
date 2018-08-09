const Envisio = Envisio || {}; // eslint-disable-line no-use-before-define
Envisio.generateTooltipDecorator = Envisio.generateTooltipDecorator || function ({ shared, chartType }) {
  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    const {
      series: { data, options: { displayData, toolTipComments } }, percentage, key, x, point,
    } = this;
    const index = data.indexOf(point);
    if (chartType === 'pie') {
      if (toolTipComments[index] === undefined) {
        return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%</span>`;
      }
      return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%<br />${toolTipComments[index]}</span>`;
    }
    if (toolTipComments[index] === undefined) {
      return `<span>${x}<br />${displayData[index]}</span>`;
    }
    return `<span>${x}<br />${displayData[index]}<br />${toolTipComments[index]}</span>`;
  };
};
