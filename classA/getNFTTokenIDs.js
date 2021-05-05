const { request } = require('../utils');

module.exports = (chain_id, address, query = {}) => {
	const api = `/${chain_id}/tokens/${address}/nft_token_ids/`;

	return request(api, query);
};


