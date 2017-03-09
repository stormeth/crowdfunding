var CrowdFunding = artifacts.require("./CrowdFunding.sol");

var TestUtils = {

    check: function() {
        console.log('Bye...')
    }
/*
    showBalance: function(s) {
        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(s.address);
        }).then(function(balance) {
            console.log(s.whoami, " ", balance)
        });
    },

    showBalances: function(people) {
        people.forEach(function(s) {
            TestUtils.showBalance(s)
        })
    }
*/
}

module.exports = TestUtils
