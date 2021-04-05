import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class InsertionSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Insertion sort'
    private timer = new Timer(this.ALGORITHM)

    async start(): Promise<void> {
        this.timer.start()
        await this.sort(this.numbers)
        this.timer.stop()
    }

    async sort(sortable: number[]): Promise<number[]> {
        let length = sortable.length

        for (let index = 1; index < length; index++) {
            const current = sortable[index]
            let swappable = index - 1
            while (swappable >= 0 && sortable[swappable] > current) {
                sortable[swappable + 1] = sortable[swappable]
                swappable = swappable - 1
            }
            sortable[swappable + 1] = current
        }
        return sortable
    }
}
