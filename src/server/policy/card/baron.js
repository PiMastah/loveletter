module.exports = function (state, opponent) {
    var currentPlayerCardRank = parseInt(state.hands[state.currentPlayer][0].rank);
    var opponentPlayerCardRank = parseInt(state.hands[opponent][0].rank);

    if (currentPlayerCardRank > opponentPlayerCardRank) {
        state.removePlayer(opponent);
    } else if (currentPlayerCardRank < opponentPlayerCardRank) {
        state.removePlayer(state.currentPlayer);
    }

    return state;
};