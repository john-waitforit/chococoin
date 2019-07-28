module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.mnemonic, process.env.infuraurl)
      },
      network_id: 3
    }
  }
};