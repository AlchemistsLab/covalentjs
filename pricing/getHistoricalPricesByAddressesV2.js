const { request } = require('../utils');

module.exports = (chain_id, quote_currency, contract_addresses, query = {}) => {
	const api = `/pricing/historical_by_addresses_v2/${chain_id}/${quote_currency}/${contract_addresses}/`;

	return request(api, query);
};
