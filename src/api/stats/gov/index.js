const { getEarnings } = require('./getEarnings');
const { getHolderCount } = require('./getHolderCount');

async function earnings(ctx) {
  try {
    ctx.status = 200;
    ctx.body = await getEarnings();
  } catch (err) {
    ctx.status = 500;
  }
}

async function holderCount(ctx) {
  try {
    ctx.status = 200;
    ctx.body = await getHolderCount();
  } catch (err) {
    ctx.status = 500;
  }
}

module.exports = { earnings, holderCount };
