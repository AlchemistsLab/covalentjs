const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/1/address/${address}/stacks/uniswap_v2/acts/`;

	return request(api, query);
};
