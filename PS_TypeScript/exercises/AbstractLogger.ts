abstract class AbstractLogger {
  abstract log(message: string): void;
  printDate(): void {
    this.log(new Date().toDateString())
  }
}

class LoggerFromAbstract extends AbstractLogger{
  public log(message: string) {
    console.log(message);
  }
  logWithDate(message: string) {
    super.printDate();
    this.log(message);
  }
}

const logs = new LoggerFromAbstract()
logs.logWithDate('Hello world!');
