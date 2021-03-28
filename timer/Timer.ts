export class Timer
{
    public static start(sortingAlgo: string) {
        console.time(sortingAlgo)
    }

    public static stop(sortingAlgo: string) {
        console.timeEnd(sortingAlgo)
    }
}