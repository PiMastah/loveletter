module.exports = function (state, opponent, rank) {
    if (rank === state.hands[state.remainingPlayers.indexOf(state.players[opponent])][0].rank) {
        state.removePlayer(opponent);
    }
    return state;
};