const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/1/networks/augur/affiliate_fee/`;

	return request(api, query);
};
