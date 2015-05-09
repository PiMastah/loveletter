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
    this.startingPlayer = -1;
    return this;
};