import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LoginPage } from '../pages/Auths/login/login';
import { StudentEntryPage } from '../pages/Data Entry/student-entry/student-entry';
import { LoaderPage } from '../pages/Extra/loader/loader';
import { TabsPage } from '../pages/Extra/tabs/tabs';
import { ActiveJobsPage } from '../pages/Main Tabs/active-jobs/active-jobs';
import { DataEntryPage } from '../pages/Main Tabs/data-entry/data-entry';
import { FollowUpPage } from '../pages/Main Tabs/follow-up/follow-up';
import { ProfilePage } from '../pages/Main Tabs/profile/profile';
import { ReportsPage } from '../pages/Main Tabs/reports/reports';
import { ChangePassPage } from '../pages/Auths/change-pass/change-pass';

export const firebaseCred = {
  apiKey: "AIzaSyBBngtTf37X5L59EnuqNnWlGFRqhgwmWQU",
  authDomain: "samatha-8edcd.firebaseapp.com",
  databaseURL: "https://samatha-8edcd.firebaseio.com",
  projectId: "samatha-8edcd",
  storageBucket: "samatha-8edcd.appspot.com",
  messagingSenderId: "659890863002"
};
firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    StudentEntryPage,
    LoaderPage,
    TabsPage,
    ActiveJobsPage,
    DataEntryPage,
    FollowUpPage,
    ProfilePage,
    ReportsPage,
    ChangePassPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    StudentEntryPage,
    LoaderPage,
    TabsPage,
    ActiveJobsPage,
    DataEntryPage,
    FollowUpPage,
    ProfilePage,
    ReportsPage,
    ChangePassPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
