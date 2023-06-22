import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcomeMessage'
})
export class WelcomeMessagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
