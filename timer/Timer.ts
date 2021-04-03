export class Timer
{
    private readonly notifier: string
    private startTime: number = 0;
    private endTime: number = 0;

    constructor(notifier: string) {
        this.notifier = notifier
    }

    public start() {
        this.startTime = Date.now()
    }

    public stop() {
        this.endTime = Date.now()
        this.printMessage()
    }

    private printMessage() {
        console.log(`${this.notifier} took ${this.getTimeSpentInSeconds()} seconds.`)
    }

    private getTimeSpentInSeconds(): number {
        return (this.endTime - this.startTime) / 1000
    }
}