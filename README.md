# covalentjs

node.js bindings for covalenthq.com

## usage

```js

const covalentjs = require('covalentjs');

// you can use classA, classB or pricing APIs
// format covalentjs.<API class>.api
// Example:
const result = await covalentjs.classA.getTokenBalancesForAddress(1, '0x4004AFc68dd8B5483bBaB82C84b81181fCB545B1', { nft: true });



```

## API refrence

Go to https://www.covalenthq.com/docs/api/
