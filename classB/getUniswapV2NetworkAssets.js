const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/1/networks/uniswap_v2/assets/`;

	return request(api, query);
};
