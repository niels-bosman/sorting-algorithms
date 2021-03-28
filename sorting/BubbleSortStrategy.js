"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BubbleSortStrategy = void 0;
var Sorter_1 = require("./Sorter");
var Timer_1 = require("../timer/Timer");
var BubbleSortStrategy = /** @class */ (function (_super) {
    __extends(BubbleSortStrategy, _super);
    function BubbleSortStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALGORITHM = "Bubble sort";
        return _this;
    }
    BubbleSortStrategy.prototype.start = function () {
        Timer_1.Timer.start(this.ALGORITHM);
        this.sort();
        Timer_1.Timer.stop(this.ALGORITHM);
    };
    BubbleSortStrategy.prototype.sort = function () {
        var sortable = this.numbers;
        sortable.forEach(function () {
            sortable.forEach(function (number, index) {
                var nextIndex = index + 1;
                // If the iterable number is bigger than the next
                // index we want to swap them. We do this using a
                // temporary variable.
                if (number[index] > number[nextIndex]) {
                    var temporary = number[index];
                    number[index] = number[nextIndex];
                    number[nextIndex] = temporary;
                }
            });
        });
        return sortable;
    };
    return BubbleSortStrategy;
}(Sorter_1.Sorter));
exports.BubbleSortStrategy = BubbleSortStrategy;
