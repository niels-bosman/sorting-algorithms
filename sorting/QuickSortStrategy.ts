import {SortStrategy} from "./SortStrategy";
import {Timer} from "../timer/Timer";
import {Sorter} from "./Sorter";

export class QuickSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM: string = "Quick sort"

    start(): void {
        Timer.start(this.ALGORITHM)
        this.sort()
        Timer.stop(this.ALGORITHM)
    }

    sort(): Array<number> {
        return this.quick(this.numbers)
    }

    quick(sortable: Array<number>): Array<number> {
        if (sortable.length <= 1) {
            return sortable
        }

        const pp: number = Math.floor(sortable.length / 2), pivot: number = sortable[pp];
        const left: Array<number> = [], right: Array<number> = [];

        sortable.forEach((number, index) => {
            if (index == pp) {
                return
            }
            if (number < pivot) {
                left.push(sortable[index])
            } else {
                right.push(sortable[index])
            }
        })

        return this.quick(left).concat(pivot, this.quick(right));
    }
}