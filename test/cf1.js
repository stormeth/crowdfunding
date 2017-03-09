var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('Cf1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];
        var ac4 = accounts[3];

        var goal = 10;

        return CrowdFunding.deployed().then(function(instance) {
            meta = instance;

            return meta.newCampaign(ac1, goal);
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac2,goal).then(function(tx1) {
                // console.log('tx1',tx1);
            })
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac3, goal);
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac4, goal);

        }).then(function() {
            return meta.contribute(ac1);

        }).then(function() {
            return meta.contribute(ac2).then(function(tx2) {
                // console.log('tx2', tx2);
            })
            return meta.contribute(ac3);
        }).then(function() {
            assert.equal(3, 3, "assert not working");

            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);
        });
    });
});
