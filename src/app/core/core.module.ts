import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase imports
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [AuthService]
})
export class CoreModule { }
