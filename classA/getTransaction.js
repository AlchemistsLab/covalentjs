const { request } = require('../utils');

module.exports = (chain_id, tx_hash, query = {}) => {
	const api = `/${chain_id}/transaction_v2/${tx_hash}/`;

	return request(api, query);
};


