"use strict";
exports.__esModule = true;
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
        this.SORT_AMOUNT = 10000;
        this.MAX_RANDOM_NUMBER_AMOUNT = 10000;
        this.generate();
    }
    Sorter.prototype.generate = function () {
        for (var i = 0; i <= this.SORT_AMOUNT; i++) {
            var randomNumber = Math.floor(Math.random() * this.MAX_RANDOM_NUMBER_AMOUNT) + 1;
            this.numbers.concat(randomNumber);
        }
    };
    Sorter.prototype.getNumbers = function () {
        return this.numbers;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
