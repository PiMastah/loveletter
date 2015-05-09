module.exports = {
    create: function () {
        return new Gamestate();
    }
};

var Gamestate = function () {
    this.players = [];
    this.remainingPlayers = [];
    this.hands = [];
    this.scores = [];
    this.deck = [];
    this.playedCards = [];
    this.discardedCards = [];
    this.currentPlayer = 0;
    this.startingPlayer = 0;
    return this;
};