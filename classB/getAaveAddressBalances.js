const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/1/address/${address}/stacks/aave/balances/`;

	return request(api, query);
};
