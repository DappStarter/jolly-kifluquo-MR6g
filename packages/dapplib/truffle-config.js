require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove regret often modify imitate problem slot gift'; 
let testAccounts = [
"0xd1586ef8a5b5b8f835cc30852ce9621faa70340598b131ab342d530065588b0b",
"0x339f864e7095438f14391c0269bd46bbc2fef1049c076d728b2b774f5fbbf48f",
"0x2b21457f8eb2da62a0ab5f06cd39f05d3d68195ac5f665097e89edb53f7395f5",
"0x264df4fb75a3eb9bcce24983f8381cb31b93f9c17540723a7f3218596b2b7ced",
"0xa0d8f3a72ed20c2f32b62940e6acf04a19823aba7b5f65f547e53edf33fa57e5",
"0x2ede4c5f97ef8a391e8376a235167a541eafb9d0c3cc851b749be59bbc2276e5",
"0xc268320c261df29170636dfa895182a29633c22cc291107c01de9ed1dfc4641d",
"0x32beaf895a4cf5edac6493591cb3a6a773a744281935b83348581c4179811deb",
"0xdbfc56ff31bb89f19c5f0ee988f5ec0e7696441e98825ceefd351a34947bc5ee",
"0x89806ff85849189fc67c2940af4c06cbb1da53372bb066b48a587edc4951d175"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

