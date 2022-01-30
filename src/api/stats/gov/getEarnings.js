const { getDailyEarnings } = require('../../../utils/getDailyEarnings');
const { getRewardsReceived } = require('../../../utils/getRewardsReceived');

const INTERVAL = 60 * 60 * 1000;

let earned = {};

const updateEarnings = async () => {
  // TODO: this looks like a nice candidate for a subgraph
  try {
    earned = await getDailyEarnings();
    earned.total = await getRewardsReceived();
  } catch (err) {}

  setTimeout(updateEarnings, INTERVAL);
};

const dailyEarnings = async () => {
  return earned;
};

module.exports = dailyEarnings;
