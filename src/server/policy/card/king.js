module.exports = function (state, opponent) {
    var temp = state.hands[state.currentPlayer];
    state.hands[state.currentPlayer] = state.hands[opponent];
    state.hands[opponent] = temp;

    return state;
};