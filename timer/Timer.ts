export class Timer {
    public static start() {
        console.time("Sorting started.")
    }

    public static stop() {
        console.timeEnd("Sorting done.")
    }
}