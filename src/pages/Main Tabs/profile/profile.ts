import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import* as firebase from 'firebase';
import { ChangePassPage } from '../../Auths/change-pass/change-pass';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fName : string ="";
  lName : string="";
  gender : string="";
  phone : string="";
  email : string = "";

  constructor(
  public navCtrl: NavController,
  public alertCtrl : AlertController,
  ) {
    this.getUser();
  }



  getUser(){
    firebase.database().ref("Anms").child(firebase.auth().currentUser.uid).once("value",snap=>{
        this.fName =snap.val().FirstName;
        this.lName = snap.val().LastName;
        this.gender = snap.val().Gender;
        this.phone =snap.val().Phone;
        this.email = snap.val().Email;
        console.log(snap.val());

    })
  }

  gtCPass(){
    this.navCtrl.push(ChangePassPage);
  }


  signOutConfirm(){
    let alert = this.alertCtrl.create({
      title: 'Confirm logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.signOut();
          }
        }
      ]
    });
    alert.present();
  }
  

  signOut(){
    firebase.auth().signOut();
  }
}
