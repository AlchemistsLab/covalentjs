const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/1/networks/aave/assets/`;

	return request(api, query);
};
