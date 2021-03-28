import {SortStrategy} from './SortStrategy'
import {Timer} from '../timer/Timer'
import {Sorter} from './Sorter'

export class QuickSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM: string = 'Quick sort'
    private timer: Timer = new Timer(this.ALGORITHM)

    public start(): void {
        this.timer.start()
        this.sort()
        this.timer.stop()
    }

    public sort(): Array<number> {
        return this.quick(this.numbers)
    }

    private quick(sortable: Array<number>): Array<number> {
        if (sortable.length <= 1) {
            return sortable
        }

        // Decide where the pivot index lays (where to split the 2 sides).
        // Also define the constants for the two sides.
        const pivotIndex: number = Math.floor(sortable.length / 2),
              pivotProperty: number = sortable[pivotIndex],
              left: Array<number> = [],
              right: Array<number> = []

        sortable.forEach((number, index) => {
            if (index == pivotIndex) {
                return
            }

            // Decide which side to push it to based on it's content.
            if (number < pivotProperty) {
                left.push(sortable[index])
            } else {
                right.push(sortable[index])
            }
        })

        // Join the left and right half together and let them run recursively.
        return this.quick(left).concat(pivotProperty, this.quick(right))
    }
}