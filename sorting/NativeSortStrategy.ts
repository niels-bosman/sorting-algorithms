import {SortStrategy} from './SortStrategy'
import {Sorter} from './Sorter'
import {Timer} from '../timer/Timer'

export class NativeSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Native JS sorting'
    private timer = new Timer(this.ALGORITHM)

    start(): void {
        this.timer.start()
        this.sort()
        this.timer.stop()
    }

    sort(): number[] {
        return this.numbers.sort((a: number, b: number) => a - b)
    }
}
