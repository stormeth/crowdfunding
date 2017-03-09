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

            return meta.newCampaign(ac1, goal);
        }).then(function() {
            return meta.newCampaign(ac2,goal).then(function(tx2) {
                // console.log(tx);
            })
        }).then(function() {
            return meta.newCampaign(ac3, goal);

        }).then(function() {
            return meta.newCampaign(ac3, goal)

        }).then(function() {

            return meta.contribute(ac1);
        }).then(function(payable1) {
            console.log('p1', payable1);

            return meta.contribute(ac2);
        }).then(function(payable2) {
            console.log('p2', payable2);

            return meta.contribute(ac3);
        }).then(function(payable3) {
            console.log('p3', payable3);
            assert.equal(3, 3, "assert not working");
        });
    });
});
