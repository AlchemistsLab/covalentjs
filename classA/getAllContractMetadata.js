const { request } = require('../utils');

module.exports = (chain_id, id, query = {}) => {
	const api = `/${chain_id}/tokens/tokenlists/${id}/`;

	return request(api, query);
};


