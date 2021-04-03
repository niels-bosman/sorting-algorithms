import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class BubbleSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Bubble sort'
    private timer = new Timer(this.ALGORITHM)

    async start(): Promise<void> {
        this.timer.start()
        await this.sort()
        this.timer.stop()
    }

    async sort(): Promise<number[]> {
        const sortable: number[] = this.numbers

        sortable.forEach(() => {
            sortable.forEach((_, index) => {
                const nextIndex = index + 1
                // If the iterable number is bigger than the next
                // index we want to swap them. We do this using a
                // temporary variable.
                if (sortable[index] > sortable[nextIndex]) {
                    const temporary = sortable[index]
                    sortable[index] = sortable[nextIndex]
                    sortable[nextIndex] = temporary
                }
            })
        })

        return sortable;
    }
}