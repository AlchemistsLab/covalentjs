const { request } = require('../utils');

module.exports = (chain_id, topic, query = {}) => {
	const api = `/${chain_id}/events/topics/${topic}/`;

	return request(api, query);
};


