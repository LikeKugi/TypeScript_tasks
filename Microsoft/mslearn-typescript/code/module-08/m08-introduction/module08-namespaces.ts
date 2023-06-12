namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string): void {
      console.log(`The message from namespace Greeting is ${greeting}`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string): void {
      const len = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${len} characters long`);
    }
    function getLength(message: string): number {
      return message.length;
    }
  }
}

import greet = AllGreetings.Greetings;
// returnGreeting('Hello');                     // Returns error
greet.returnGreeting('Bonjour');         // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
