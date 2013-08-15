(function () {
    'use strict';
    function Card() {
        this.isFaceUp = false;
        this.isUnplay = false;

    }

    Card.prototype = {
        contents: function (v) {
            if (v === undefined) {
                return this._contents;
            } else {
                return this._contents = v;
            }
        },
        math: function (otherCards) {
            var score = 0;
            if (Array.isArray(otherCards)) {
                otherCards.forEach(compare, this);
            } else {
                compare.call(this, otherCards);
            }

            function compare(card) {
                if (card.contents() === this.contents()) {
                    score = 1;
                }
            }

            return score;
        }


    };


    function exprorts() {
        return new Card();
    }

    exprorts.Card = Card;

    window.card = exprorts;
})();