import {SortStrategy} from "./SortStrategy"
import {Sorter} from "./Sorter"
import {Timer} from "../timer/Timer";

export class BubbleSortStrategy extends Sorter implements SortStrategy
{
    start(): void {
        Timer.start()
        this.sort()
        Timer.stop()
    }

    public sort(): Array<number> {
        const sortable: Array<number> = this.numbers

        sortable.forEach(() => {
            sortable.forEach((number, index) => {
                const nextIndex: number = index + 1
                // If the iterable number is bigger than the next
                // index we want to swap them. We do this using a
                // temporary variable.
                if (number[index] > number[nextIndex]) {
                    const temporary: number = number[index]
                    number[index] = number[nextIndex]
                    number[nextIndex] = temporary
                }
            })
        })

        return sortable
    }
}