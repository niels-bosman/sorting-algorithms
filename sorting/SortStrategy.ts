export interface SortStrategy
{
    /**
     * Starts the timers and sorts the numbers.
     **/
    start(): Promise<void>

    /**
     * Sorts an array of numbers with a specific algorithm.
     *
     * @return {number[]} The sorted array
     **/
    sort(sortable: number[]): Promise<number[]>
}