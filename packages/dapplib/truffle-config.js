require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note noise example install gloom outer stove'; 
let testAccounts = [
"0x6bfaa37eb38f589407d1562f1c2ac2744ee6bf9fc9adaf761b16484a115db95d",
"0xe1829fd6b2851c4a9b889f07d0084bc3e00de76733e9f95e4319199f5fcda824",
"0x533cb7619baa891c62557c36c993faad9dfbfd8b0febd909cb51d19172dba64d",
"0x6df4e2ac3634844c0357887b37240fe1eee8141dceed01466bb55f54ca10981f",
"0x4f47644edb8094095213f6a6d71c297f2299908c01a81656f5e2c5b379322d77",
"0x71996f1d55fca7fb155b271d4e0de4084bfbfd68d669ad1eb668e8f2d0f53097",
"0x67f79b7c957b66a82e0acc548cc9ed4ae4c1815e10653caf5b9fbd0406ff95e0",
"0x6d638cbb2268d470d9dc5c2638ccb4c75533cbd62e79796c30a5551fe00a5986",
"0x06d1e38d49e0642fd1f3670f8f0a34ff815a2dffbb806fe86848cf4c87273c6a",
"0x9d3baf4b7f3a97c696164facd1a5190694fb6f4229c4af743e6135dd5da3be4f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

