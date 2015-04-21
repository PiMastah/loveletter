module.exports = {
    create: function (rank) {
        return new Card(rank);
    }
};

var Card = function (rank) {
    this.rank = rank;

    return this;
};