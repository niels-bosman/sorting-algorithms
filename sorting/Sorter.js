"use strict";
exports.__esModule = true;
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    /**
     *  Makes sure all the sortable data is ready when a sorter is instantiated.
     **/
    function Sorter() {
        this.numbers = [];
        this.SORT_AMOUNT = 10000;
        this.MAX_RANDOM_NUMBER_AMOUNT = 10000;
        this.addNumbers();
    }
    /**
     *  Adds numbers to the numbers array.
     **/
    Sorter.prototype.addNumbers = function () {
        for (var i = 0; i <= this.SORT_AMOUNT; i++) {
            this.numbers.push(this.getRandomNumber());
        }
    };
    /**
     *  Generates a random number between 1 and the MAX_RANDOM_NUMBER_AMOUNT
     **/
    Sorter.prototype.getRandomNumber = function () {
        return Math.floor(Math.random() * this.MAX_RANDOM_NUMBER_AMOUNT) + 1;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
