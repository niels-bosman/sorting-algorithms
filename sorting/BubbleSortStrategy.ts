import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class BubbleSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM: string = 'Bubble sort'
    private timer: Timer = new Timer(this.ALGORITHM)

    public start(): void {
        this.timer.start()
        this.sort()
        this.timer.stop()
    }

    public sort(): Array<number> {
        const sortable: Array<number> = this.numbers

        sortable.forEach(() => {
            sortable.forEach((_, index) => {
                const nextIndex: number = index + 1
                // If the iterable number is bigger than the next
                // index we want to swap them. We do this using a
                // temporary variable.
                if (sortable[index] > sortable[nextIndex]) {
                    const temporary: number = sortable[index]
                    sortable[index] = sortable[nextIndex]
                    sortable[nextIndex] = temporary
                }
            })
        })

        return sortable
    }
}