var TestUtils = require('./testutils')
var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('Cf1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];
        var ac4 = accounts[3];

        var goal1 = 5;
        var goal2 = 6;
        var goal3 = 7;
        var goal4 = 8;

        return CrowdFunding.deployed().then(function(instance) {
            meta = instance;

            return meta.newCampaign(ac1, goal1);
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac2,goal2).then(function(tx1) {
                // console.log('tx1',tx1);
            })
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac3, goal3);
        }).then(function() {
            return meta.getNumberOfCampaigns.call();
        }).then(function(num) {
            console.log(num);

        }).then(function() {
            return meta.newCampaign(ac4, goal4);

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
        }).then(function() {

            return meta.getCampaignAmount.call(4);
        }).then(function(num) {
            console.log(num);
            console.log(ac1);
            TestUtils.check();
        });
    });
});
