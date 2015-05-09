var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var stateFactory = require('../../src/server/gamestate');
var deckFactory = require('../../src/server/deck');
var cardFactory = require('../../src/server/card');

buster.spec.expose();

describe("Game state", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
        self.state = stateFactory.create(self.deck);
        self.players = ['Alice', 'Bob'];
        self.state.players = self.players;
        self.state.remainingPlayers = self.players;
    });

    it("can be created", function () {
        assert.same(typeof self.state, 'object');
    });

    it("contains players", function () {
        assert.defined(self.state.players);
    });

    it("knows the remaining players", function () {
        assert.defined(self.state.remainingPlayers);
    });

    it("knows the current player", function () {
        assert.defined(self.state.currentPlayer);
    });

    it("knows the current scores", function () {
        assert.defined(self.state.scores);
    });

    it("knows each players cards", function () {
        assert.defined(self.state.hands);
    });

    it("knows the cards that each player has played", function () {
        assert.defined(self.state.playedCards);
    });

    it("knows the state of the deck", function () {
        assert.equals(self.state.deck, self.deck);
    });

    it("knows the cards that have been removed", function () {
        assert.defined(self.state.discardedCards);
    });

    it("can remove a player from the round", function () {
        var index = 1;

        self.state.removePlayer(index);
        refute.contains(self.state.remainingPlayers, self.state.players[index]);
    });

    it("can make a player discard his hand and draw a new card", function () {
        var nextCard = cardFactory.create('2');
        var opponent = 1;
        var handBefore = [cardFactory.create('1')];

        self.deck.cards = [nextCard];
        self.state.hands[opponent] = handBefore;

        self.state.discardHand(opponent);

        refute.equals(self.state.hands[opponent], handBefore);
        assert.equals(self.state.hands[opponent], [nextCard]);
    });

    it("can remove a player when he discards a princess", function () {
        var opponent = 1;
        self.state.hands[opponent] = [cardFactory.create('8')];

        self.state.discardHand(opponent);

        refute.contains(self.state.remainingPlayers, self.players[opponent]);
    });
});