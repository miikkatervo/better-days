import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersMoodService {

  constructor() { }
  currentMood$:string = "5";
}
