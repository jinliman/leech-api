const axios = require('axios');

const getVaults = async vaultsEndpoint => {
  try {
    const response = await axios.get(vaultsEndpoint);
    const data = response.data;
    let vaults = '[' + data.substring(data.indexOf('\n') + 1);
    vaults = eval(vaults);
    return vaults;
  } catch (err) {
    return 0;
  }
};

module.exports = {
  getVaults
};
