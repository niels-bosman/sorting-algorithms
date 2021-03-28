export class Timer
{
    private readonly notifier: string

    constructor(notifier: string) {
        this.notifier = notifier
    }

    public start() {
        console.time(this.notifier)
    }

    public stop() {
        console.timeEnd(this.notifier)
    }
}