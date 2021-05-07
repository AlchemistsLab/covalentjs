const getHistoricalPricesByAddress = require('./getHistoricalPricesByAddress');
const getHistoricalPricesByAddressesV2 = require('./getHistoricalPricesByAddressesV2');
const getHistoricalPricesByAddresses = require('./getHistoricalPricesByAddresses');
const getHistoricalPricesByTickerSymbol = require('./getHistoricalPricesByTickerSymbol');
const getSpotPrices = require('./getSpotPrices');
const getPriceVolatility = require('./getPriceVolatility');

module.exports = {
	getHistoricalPricesByAddress,
	getHistoricalPricesByAddressesV2,
	getHistoricalPricesByAddresses,
	getHistoricalPricesByTickerSymbol,
	getSpotPrices,
	getPriceVolatility
};
