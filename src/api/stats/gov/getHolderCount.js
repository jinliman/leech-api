const { getHolders } = require('../../../utils/getHolders');

const getHolderCount = async () => {
  return await getHolders();
};

module.exports = getHolderCount;
