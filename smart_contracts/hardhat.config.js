// https://eth-goerli.g.alchemy.com/v2/XzfkHma3vZShgJOhgSsJ9HzvPqEoOHDA

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/XzfkHma3vZShgJOhgSsJ9HzvPqEoOHDA',
            accounts: [`b82ba2ed9ae05224ed43ba979e94a25dfb3ea853401a6660fb9f9fecf4a9f0f2`]

        }
    }
}