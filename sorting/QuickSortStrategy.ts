import {SortStrategy} from './SortStrategy'
import {Timer} from '../timer/Timer'
import {Sorter} from './Sorter'

export class QuickSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Quick sort'
    private timer = new Timer(this.ALGORITHM)

    public async start(): Promise<void> {
        this.timer.start()
        await this.sort()
        this.timer.stop()
    }

    async sort(): Promise<number[]> {
        return this.quick(this.numbers);
    }

    private quick(sortable: number[]): number[] {
        if (sortable.length <= 1) {
            return sortable
        }

        // Decide where the pivot index lays (where to split the 2 sides).
        // Also define the constants for the two sides.
        const pivotIndex = Math.floor(sortable.length / 2),
            pivotProperty = sortable[pivotIndex],
            left: number[] = [],
            right: number[] = []

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