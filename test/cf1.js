var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('Cf1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];

        var ac1_start;
        var ac2_start;
        var ac1_end;
        var ac2_end;

        var goal = 10;

        return CrowdFunding.deployed().then(function(instance) {
            meta = instance;
            return meta.newCampaign(ac1,goal)
        }).then(function(c1) {
            console.log('c1', c1);
            assert.equal(1, 1, "assert not working");
        });
    });
});
