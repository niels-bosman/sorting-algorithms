export interface SortStrategy {
    /**
     * Sorts an array of numbers with a specific algorithm.
     *
     * @param numbers
     * @return {Array<number>} The sorted array
     **/
    sort(numbers: Array<number>): Array<number>
}