var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/prince');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');
var deckFactory = require('../../../../src/server/deck');

buster.spec.expose();

describe("A Prince", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
        self.state = stateFactory.create(self.deck);
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];
    });

    it("does make opponent discard and draw a new card", function () {
        var opponent = 1;
        var newCard = cardFactory.create('1');

        self.state.hands[opponent] = [];
        self.state.deck.drawCard = this.stub().returns(newCard);
        self.state.discardHand = this.spy();

        cardPolicy(self.state, opponent);

        assert.called(self.state.discardHand);
        assert.called(self.state.deck.drawCard);
        assert.equals(self.state.hands[opponent], [newCard]);
    });

    it("does not make opponent draw a new card when he discards a princess", function () {
        var opponent = 1;
        self.state.hands[opponent] = [cardFactory.create('8')];

        self.state.deck.drawCard = this.spy();

        cardPolicy(self.state, opponent);

        refute.called(self.state.deck.drawCard);
    });
});
