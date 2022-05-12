import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPhraseGeneratorService {
  private phrases: string[] = [
    'I will catch all the criminals',
    'I will protect you',
    'I am stronger then you',
    'You are safe because of me',
    'You will never know about my identity',
    'I am cool'
  ];

  constructor() { }

  getRandomPhrase(): string {
    const random: number = Math.floor(Math.random() * (this.phrases.length));
    return this.phrases[random];
  }

}
