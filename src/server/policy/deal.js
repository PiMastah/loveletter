module.exports = function (state) {
    state.discardedCards = Array.apply(null, new Array(4)).map(function () {
        return state.deck.drawCard();
    });

    var temp = state.players.slice(state.currentPlayer);
    var temp2 = state.players.slice(0, state.currentPlayer);

    state.hands = [];
    temp.concat(temp2).map(function (player, index) {
        state.hands[state.players.indexOf(player)] = [state.deck.drawCard()];
    });

    return state;
};