const { request } = require('../utils');

module.exports = (quote_currency, ticker_symbol, query = {}) => {
	const api = `/pricing/historical/${quote_currency}/${ticker_symbol}/`;

	return request(api, query);
};
