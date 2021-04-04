import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class InsertionSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Insertion sort'
    private timer = new Timer(this.ALGORITHM)

    async start(): Promise<void> {
        this.timer.start()
        await this.sort()
        this.timer.stop()
    }

    async sort(): Promise<number[]> {
        let length = this.numbers.length

        for (let index = 1; index < length; index++) {
            const current = this.numbers[index]
            let previous = index - 1
            while (previous >= 0 && this.numbers[previous] > current) {
                this.numbers[previous + 1] = this.numbers[previous]
                previous = previous - 1
            }
            this.numbers[previous + 1] = current
        }
        return this.numbers
    }
}
