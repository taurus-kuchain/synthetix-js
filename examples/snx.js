const { SynthetixJs } = require('../dist/main.node.js');

function a() {
  const networkId = 20;
  const snx = new SynthetixJs({networkId});
  console.log("------", JSON.stringify(snx));
}

a()