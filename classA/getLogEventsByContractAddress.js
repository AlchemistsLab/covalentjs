const { request } = require('../utils');

module.exports = (chain_id, address, query = {}) => {
	const api = `/${chain_id}/events/address/${address}/`;

	return request(api, query);
};


