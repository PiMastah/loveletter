module.exports = {
    create: function (deck) {
        return new Gamestate(deck);
    }
};

var Gamestate = function (deck) {
    this.players = [];
    this.remainingPlayers = [];
    this.hands = [];
    this.scores = [];
    this.deck = deck;
    this.playedCards = [];
    this.discardedCards = [];
    this.currentPlayer = -1;
    return this;
};

Gamestate.prototype.removePlayer = function(index) {
    this.remainingPlayers.splice(index, 1);
};