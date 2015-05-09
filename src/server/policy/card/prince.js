module.exports = function (state, opponent) {
    state.discardHand(opponent);
    if (-1 < state.remainingPlayers.indexOf(state.players[opponent])) {
        state.hands[opponent].push(state.deck.drawCard());
    }
};