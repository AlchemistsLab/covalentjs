const axios = require('axios').default;
const querystring = require('querystring');
const debug = require('debug')('covalentjs');

const { API_HOST } = require('./constants');

const API_KEY = process.env.API_KEY;

const request = async (api, query = {}) => {
	if (!API_KEY) {
		throw new Error('Please set API_KEY environment variable.')
	}

	query.key = API_KEY;

	try {
		const url = `${API_HOST}${api}?${querystring.stringify(query)}`;
		debug(url);
		const response = await axios.get(url);

		return response.data;
	} catch (error) {
		debug(error);
		return error.response && error.response.data;
	}
};

module.exports = {
	request
};
