import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Tab, Tabs } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../../Extra/tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  phone : string;
  pass : string;

  
  constructor(
    public navCtrl: NavController, 
    public toastCtrl : ToastController,
    public loadingCtrl : LoadingController,
    public navParams: NavParams
    ) {}

    // ionViewDidEnter(){
    //   let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //     if(firebase.auth().currentUser){
    //     this.navCtrl.setRoot(TabsPage);
    //     }
    //     loading.dismiss();
    // }

    checkData(){
      console.log(this.phone, this.pass,);
      
    if(this.phone.length){
      if(this.pass){
        this.login();
      }else{
        this.presentToast("Enter Password");
      }
    }else{
      this.presentToast("Phone Number not Valid");
    }
  }


  login(){
    var malGen = this.phone+ "@samatha.anm";
    console.log(malGen)
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    firebase.auth().signInWithEmailAndPassword(malGen,this.pass).then(()=>{
      this.navCtrl.setRoot(TabsPage)
      loading.dismiss()
    }).catch((er)=>{
      loading.dismiss();
      var mg = er.message;
      this.presentToast(mg);
    });
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position : "top",
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();
  }

}
