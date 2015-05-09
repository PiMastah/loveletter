module.exports = function (state, dealer) {
    state.discardedCards = Array.apply(null, new Array(4)).map(function () {
        return dealer.drawCard();
    });
    state.hands = state.players.map(function (player, index) {
        return [dealer.drawCard()];
    });
    state.deck = Array.apply(null, new Array(dealer.deck.length)).map(function () {
        return dealer.drawCard();
    });
    return state;
};