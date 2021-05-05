const { request } = require('../utils');

module.exports = (chain_id, block_height, query = {}) => {
	const api = `/${chain_id}/block_v2/${block_height}/`;

	return request(api, query);
};


