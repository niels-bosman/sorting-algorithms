export interface SortStrategy
{
    /**
     * Starts the timers and sorts the numbers.
     **/
    start(): void

    /**
     * Sorts an array of numbers with a specific algorithm.
     *
     * @return {number[]} The sorted array
     **/
    sort(): number[]
}