const { request } = require('../utils');

module.exports = (chain_id, query = {}) => {
	const api = `/${chain_id}/address/{address}/stacks/sushiswap/balances/`;

	return request(api, query);
};
