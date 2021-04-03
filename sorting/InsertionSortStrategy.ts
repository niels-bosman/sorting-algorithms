import {SortStrategy} from "./SortStrategy";
import {Sorter} from "./Sorter";
import {Timer} from "../timer/Timer";

export class InsertionSortStrategy extends Sorter implements SortStrategy
{
    private ALGORITHM = 'Insertion sort'
    private timer = new Timer(this.ALGORITHM)

    public start(): void {
        this.timer.start()
        this.sort()
        this.timer.stop()
    }

    public sort(): number[] {
        let length = this.numbers.length;

        for (let i = 1; i < length; i++) {
            const current = this.numbers[i];
            let previous = i - 1;
            while (previous >= 0 && this.numbers[previous] > current) {
                this.numbers[previous + 1] = this.numbers[previous];
                previous = previous - 1;
            }
            this.numbers[previous + 1] = current;
        }
        return this.numbers;
    }
}