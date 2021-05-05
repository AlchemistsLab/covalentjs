const { request } = require('../utils');

module.exports = (chain_id, start_date, end_date, query = {}) => {
	const api = `/${chain_id}/block_v2/${start_date}/${end_date}/`;

	return request(api, query);
};
