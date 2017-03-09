var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('Cf1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];

        var goal = 10;

        return CrowdFunding.deployed().then(function(instance) {
            meta = instance;
            return meta.newCampaign(ac1,goal)

        }).then(function(c1) {
            console.log('c1 = ', c1)
            return meta.newCampaign(ac2, goal).then(function(tx) {
                // console.log(tx);
            })

        }).then(function(c2) {
            console.log('c2 = ', c2)
            return meta.newCampaign(ac3, goal)

        }).then(function(c3) {
            console.log('c3 = ', c3)
            assert.equal(1, 1, "assert not working");
        });
    });
});
