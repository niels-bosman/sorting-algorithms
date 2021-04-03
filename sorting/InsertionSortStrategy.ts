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
            let key = this.numbers[i];
            let j = i - 1;
            while (j >= 0 && this.numbers[j] > key) {
                this.numbers[j + 1] = this.numbers[j];
                j = j - 1;
            }
            this.numbers[j + 1] = key;
        }
        return this.numbers;
    }
}