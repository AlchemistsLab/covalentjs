const { request } = require('../utils');

module.exports = (chain_id, address, token_id, query = {}) => {
	const api = `/${chain_id}/tokens/${address}/nft_metadata/${token_id}/`;

	return request(api, query);
};


