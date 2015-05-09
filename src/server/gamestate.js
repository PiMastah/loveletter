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
    this.currentPlayer = 0;
    this.startingPlayer = 0;
    return this;
};