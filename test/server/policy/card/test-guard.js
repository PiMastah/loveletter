var buster = require("buster");
var assert = buster.assert;

var dealPolicy = require('../../../../src/server/policy/deal');
var cardPolicy = require('../../../../src/server/policy/card/guard');
var dealerFactory = require('../../../../src/server/dealer');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A guard", function () {
    var self = this;
    buster.spec.before(function () {
        self.dealer = dealerFactory.create();
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];
        self.dealer.deckConfig = {'1' : 5, '2' : 2, '3': 2, '4' : 2, '5': 2, '6': 1, '7': 1, '8': 1};
        self.dealer.initDeck();
        dealPolicy(self.state, self.dealer);
        self.state.hands[0] = [cardFactory.create(1)];
        self.state.hands[1] = [cardFactory.create(2)];
    });

    it("can guess incorrectly", function () {
        var opponent = 1;
        var rank = 3;
        cardPolicy(self.state, opponent, rank);
        assert(2 === self.state.remainingPlayers.length);
        assert(opponent === self.state.remainingPlayers.indexOf(self.state.players[opponent]));
        assert(0 === self.state.remainingPlayers.indexOf(self.state.players[0]));
    });

    it("can guess correctly", function () {
        var opponent = 1;
        var rank = 2;
        cardPolicy(self.state, opponent, rank);
        assert(1 === self.state.remainingPlayers.length);
        assert(-1 === self.state.remainingPlayers.indexOf(self.state.players[opponent]));
        assert(0 === self.state.remainingPlayers.indexOf(self.state.players[0]));
    });
});