export class Sorter
{
    public numbers: number[] = []
    private SORT_AMOUNT = 50000
    private MAX_RANDOM_NUMBER_AMOUNT = 10000

    /**
     *  Makes sure all the sortable data is ready when a sorter is instantiated.
     **/
    constructor() {
        this.addNumbers()
    }

    /**
     *  Adds numbers to the numbers array.
     **/
    private addNumbers(): void {
        for (let i: number = 0; i <= this.SORT_AMOUNT; i++) {
            this.numbers.push(this.getRandomNumber())
        }
    }

    /**
     *  Generates a random number between 1 and the MAX_RANDOM_NUMBER_AMOUNT
     **/
    private getRandomNumber(): number {
        return Math.floor(Math.random() * this.MAX_RANDOM_NUMBER_AMOUNT) + 1
    }
}