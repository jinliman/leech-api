'use strict';

async function rt(ctx, next) {
  await next();
  ctx.set('X-Powered-By', 'rec!');
}

module.exports = rt;
