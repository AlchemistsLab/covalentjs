const { request } = require('../utils');

module.exports = (chain_id, address, query = {}) => {
	const api = `/${chain_id}/tokens/${address}/token_holders_changes/`;

	return request(api, query);
};


