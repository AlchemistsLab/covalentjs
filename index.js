const classA = require('./classA');
const classB = require('./classB');
const pricing = require('./pricing');

module.exports = {
	classA,
	classB,
	pricing
}

if (require.main === module) {
	async function test() {
		// console.log(await classA.getHistoricalPortfolioValueOverTime(1, '0x4004AFc68dd8B5483bBaB82C84b81181fCB545B1', {}));
		// console.log(await classB.getAaveNetworkAssets({}));
	}

	test().catch(console.error);
}
