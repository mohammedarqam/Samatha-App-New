import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/Extra/tabs/tabs';
import { LoginPage } from '../pages/Auths/login/login';
import * as firebase from 'firebase';
import { LoaderPage } from '../pages/Extra/loader/loader';
import { DataEntryPage } from '../pages/Main Tabs/data-entry/data-entry';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = DataEntryPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    ) {
      platform.ready().then(() => {
        // firebase.auth().onAuthStateChanged((user)=>{
        //   if(user){
        //     this.rootPage = TabsPage;
        //   }else{
        //     this.rootPage = LoginPage;
        //   }
        // })
  
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  }
  