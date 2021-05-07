const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/pricing/volatility/`;

	return request(api, query);
};
