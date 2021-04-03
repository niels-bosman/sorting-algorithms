import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class NativeSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Native JS sorting'
    private timer = new Timer(this.ALGORITHM)

    async start(): Promise<void> {
        this.timer.start()
        await this.sort()
        this.timer.stop()
    }

    async sort(): Promise<number[]> {
        return this.numbers.sort((a: number, b: number) => a - b)
    }
}
