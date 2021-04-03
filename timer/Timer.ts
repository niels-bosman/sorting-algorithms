export class Timer
{
    private readonly notifier: string
    private startTime: number = 0;
    private endTime: number = 0;

    constructor(notifier: string) {
        this.notifier = notifier
    }

    public start() {
        this.startTime = new Date().getTime()
    }

    public stop() {
        this.endTime = new Date().getTime()
        this.printMessage()
    }

    private printMessage() {
        console.log(`${this.notifier} took ${this.getTimeSpentInSeconds()} seconds.`)
    }

    private getTimeSpentInSeconds(): number {
        let timeDiff = this.endTime - this.startTime
        timeDiff /= 1000

        return timeDiff;
    }
}