import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [] 

  log(message: string) {
    this.messages.push(message);
  }
  
  clear(): void {
    this.messages = [];
  }
}

// /**
//  * Decorate method for logging
//  * 
//  * @param {string} value String or String pattern
// */
// export function Log(value: string): MethodDecorator {
//   return function (target: Object, propertyKey: string | symbol, descriptor: any) {
//     const originalMethod = descriptor.value; 
    
//     descriptor.value =  function (...args: any[]) {
//       const newMessage = replaceOnArguments(value, args);
//       _messages.push(newMessage);
//       const result = originalMethod.apply(this, args);
//       return result;
//     }
//     return descriptor;
//   }
// }

// function replaceOnArguments(str: string, args: any[]) {

//   return str.replace(/(\$\{\d\})/g, (value) => {
//     const index = Number(value.match(/\d+/));
//     return args[index];
//  })
// }