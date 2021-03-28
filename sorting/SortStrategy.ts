export interface SortStrategy
{
    /**
     * Starts the timers and sorts the numbers.
     **/
    start(): void

    /**
     * Sorts an array of numbers with a specific algorithm.
     *
     * @return {Array<number>} The sorted array
     **/
    sort(): Array<number>
}