const { request } = require('../utils');

module.exports = (chain_id, query = {}) => {
	const api = `/${chain_id}/networks/sushiswap/assets/`;

	return request(api, query);
};
