var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/priest');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A Priest", function () {
    var self = this;
    buster.spec.before(function () {
    });

    it("//does magic", function () {
    });
});