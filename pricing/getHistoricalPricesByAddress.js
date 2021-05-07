const { request } = require('../utils');

module.exports = (chain_id, quote_currency, contract_address, query = {}) => {
	const api = `/pricing/historical_by_address/${chain_id}/${quote_currency}/${contract_address}/`;

	return request(api, query);
};
