const getTokenBalancesForAddress = require('./getTokenBalancesForAddress');
const getHistoricalPortfolioValueOverTime = require('./getHistoricalPortfolioValueOverTime');
const getTransactions = require('./getTransactions');
const getERC20TokenTransfers = require('./getERC20TokenTransfers');
const getBlock = require('./getBlock');
const getBlockHeights = require('./getBlockHeights');
const getLogEventsByContractAddress = require('./getLogEventsByContractAddress');
const getLogEventsByTopicHashes = require('./getLogEventsByTopicHashes');
const getExternalNFTMetadata = require('./getExternalNFTMetadata');
const getNFTTokenIDs = require('./getNFTTokenIDs');
const getNFTTransactions = require('./getNFTTransactions');
const getChangesInTokenHoldersBetweenTwoBlockHeights = require('./getChangesInTokenHoldersBetweenTwoBlockHeights');
const getTokenHoldersAsOfABlockHeight = require('./getTokenHoldersAsOfABlockHeight');
const getAllContractMetadata = require('./getAllContractMetadata');
const getTransaction = require('./getTransaction');

module.exports = {
	getTokenBalancesForAddress,
	getHistoricalPortfolioValueOverTime,
	getTransactions,
	getERC20TokenTransfers,
	getBlock,
	getBlockHeights,
	getLogEventsByContractAddress,
	getLogEventsByTopicHashes,
	getExternalNFTMetadata,
	getNFTTokenIDs,
	getNFTTransactions,
	getChangesInTokenHoldersBetweenTwoBlockHeights,
	getTokenHoldersAsOfABlockHeight,
	getAllContractMetadata,
	getTransaction
};
