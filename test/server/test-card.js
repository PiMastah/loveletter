var buster = require("buster");
var assert = buster.assert;

var cardFactory = require('../../src/server/card');

buster.spec.expose();

describe("A card", function () {
    it("has a name", function () {
        var rank = 1;
        var card = cardFactory.create(rank);

        assert.same(card.rank, rank);
    });
});