const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/1/networks/compound/assets/`;

	return request(api, query);
};
