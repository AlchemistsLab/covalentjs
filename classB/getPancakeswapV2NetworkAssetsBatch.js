const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/56/networks/pancakeswap_v2/assets/`;

	return request(api, query);
};
