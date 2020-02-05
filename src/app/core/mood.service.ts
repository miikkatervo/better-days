import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
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
      // iterate the user's streak
      const streak = this.afs.collection('user-streaks', ref => ref.where('uid', '==', uid)).valueChanges();
   }

   getMood(){
      const uid:string = this.auth.getUid();
      const docRef = this.afs.collection('users').doc(uid).collection('daily-moods');
      return docRef.valueChanges();


      /*
      if (userMood >= 3) {
        docRef.collection('daily-moods', ref => ref.where
        ('mood', '<=', 2))
          .valueChanges().subscribe(mood => {
            data = mood;
            console.log("1");
            console.log(data);
            console.log(data[0]);
          });
      } else {
        docRef.collection('daily-moods', ref => ref.where
        ('mood', '>=', 3))
          .valueChanges().subscribe(mood => {
            data = mood;
            console.log("2");
            console.log(data);
            console.log(data[0]);
          });
      }
      */
   }

}
