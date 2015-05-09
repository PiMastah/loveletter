module.exports = function (state, opponent, rank) {
    if (rank === state.hands[state.remainingPlayers.indexOf(state.players[opponent])][0].rank) {
        state.remainingPlayers.splice(opponent, 1);
    }
    return state;
};