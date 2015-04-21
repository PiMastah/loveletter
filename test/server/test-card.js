var buster = require("buster");
var expect = buster.expect;

var cardFactory = require('../../src/server/card');

buster.spec.expose();

describe("A card", function () {
    it("has a name", function () {
        var rank = 1;
        var card = cardFactory.create(rank);

        expect(card.rank).toBe(rank);
    });
});