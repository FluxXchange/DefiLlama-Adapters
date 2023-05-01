const { gmxExports } = require("../helper/gmx");

const fantomVault = "0xc050733A325eEe50E544AcCbD38F6DACEd60ea6D";

module.exports = {
    fantom: {
        tvl: gmxExports({ vault: fantomVault })
    }
};
