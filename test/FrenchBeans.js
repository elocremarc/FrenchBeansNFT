const { assert } = require("chai");

var FrenchBeans = artifacts.require("./FrenchBeans.sol");

require("chai").use(require("chai-as-promised")).should();

contract("FrenchBeans", (accounts) => {
  var token;

  before(async () => {
    token = await FrenchBeans.deployed();
  });

  it(`has a name`, async () => {
    const name = await token.name();
    assert.equal(name, "FrenchBeans");
  });

  it(`has a symbol`, async () => {
    const symbol = await token.symbol();
    assert.equal(symbol, "BEANS");
  });

  it("Mints NFTs", async () => {
    account = accounts[0];
    await token.awardNFT(account);
    const owner = await token.ownerOf(1);
    assert.equal(owner, accounts[0]);
  });

  it("Token has correct  URI", async () => {
    const Uri = await token.tokenURI(1);
    assert.equal(
      Uri,
      "https://ipfs.fleek.co/ipfs/bafybeia4xg542ak7kigujvrudq43dsku5o5wosnecdowimbbp6xixg773y"
    );
  });
});
