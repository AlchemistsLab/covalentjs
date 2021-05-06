const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/1/address/${address}/stacks/compound/acts/`;

	return request(api, query);
};
