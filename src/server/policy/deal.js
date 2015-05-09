module.exports = function (state) {
    state.discardedCards = Array.apply(null, new Array(4)).map(function () {
        return state.deck.drawCard();
    });
    state.hands = state.players.map(function (player, index) {
        return [state.deck.drawCard()];
    });
    return state;
};