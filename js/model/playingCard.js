(function (card) {
    'use strict';

    function PlayingCard() {
        this.superClas = card.Card;
        this.superClas.call(this);
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype);

    function exports() {
        return new playingCard();
    }

    exports.playingCard = PlayingCard;

    window.playingCard = exports;

})(window.card);
