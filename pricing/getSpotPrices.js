const { request } = require('../utils');

module.exports = (query = {}) => {
	const api = `/pricing/tickers/`;

	return request(api, query);
};
