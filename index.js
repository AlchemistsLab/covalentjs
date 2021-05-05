const classA = require('./classA');
const classB = require('./classA');

module.exports = {
	classA,
	classB
}

if (require.main === module) {
	async function test() {
		const result = await classA.getTokenBalancesForAddress(1, '0x4004AFc68dd8B5483bBaB82C84b81181fCB545B1', true);

		console.log(result);
	}

	test().catch(console.error);
}
