var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/handmaid');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A Handmaid", function () {
    var self = this;
    buster.spec.before(function () {
    });

    it("//protects the player", function () {
    });
});