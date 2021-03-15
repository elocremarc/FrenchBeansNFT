pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FrenchBeans is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("FrenchBeans", "BEANS") public {
        string memory URI = "https://ipfs.fleek.co/ipfs/bafybeia4xg542ak7kigujvrudq43dsku5o5wosnecdowimbbp6xixg773y";
        _setBaseURI(URI);
    }

    function awardNFT(address recipient) public returns (uint256) {
        _tokenIds.increment();

        uint256 newNftId = _tokenIds.current();
        _mint(recipient, newNftId);
        _setTokenURI(newNftId, "");

        return newNftId;
    }
}