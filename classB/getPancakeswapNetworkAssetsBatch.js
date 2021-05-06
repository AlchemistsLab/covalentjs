const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/56/networks/pancakeswap/assets/`;

	return request(api, query);
};
