import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MoodSurveyItem } from '../models/mood-survey-item.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) {}

  showChart$: boolean = false;

   addItem(item: MoodSurveyItem){ // add a daily mood-survey to firestore
     const uid = this.auth.getUid();
     this.afs.collection('users').doc(uid).collection('daily-moods').add(item)
      .catch(function(error) {
        console.log(error);
      });
   }

   getMood(){ // return all past daily-mood-surveys
      const uid:string = this.auth.getUid();
      const docRef = this.afs.collection('users').doc(uid).collection('daily-moods');
      return docRef.valueChanges();
   }

}
