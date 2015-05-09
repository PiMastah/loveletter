module.exports = function (state, opponent) {
    var currentPlayerCardRank = parseInt(state.hands[state.currentPlayer][0].rank);
    var opponentPlayerCardRank = parseInt(state.hands[opponent][0].rank);

    if (currentPlayerCardRank > opponentPlayerCardRank) {
        state.remainingPlayers.splice(opponent, 1);
    } else if (currentPlayerCardRank < opponentPlayerCardRank) {
        state.remainingPlayers.splice(state.currentPlayer, 1);
    }

    return state;
};