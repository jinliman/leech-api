const { startOfMinute, subDays } = require('date-fns');

const getUtcSecondsFromDayRange = (daysAgo0, daysAgo1) => {
  const endDate = startOfMinute(subDays(Date.now(), daysAgo0));
  const startDate = startOfMinute(subDays(Date.now(), daysAgo1));
  const [start, end] = [startDate, endDate].map(getUTCSeconds);
  return [start, end];
};

const getUTCSeconds = (date) => Math.floor(Number(date) / 1000);

module.exports = {
  getUtcSecondsFromDayRange,
  getUTCSeconds,
};
