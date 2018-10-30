import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-data-entry',
  templateUrl: 'data-entry.html',
})
export class DataEntryPage {

  user : string = "EXWmJmdHlMRhQ4Akt5DTYnjrZSx1";

  activeJobs : Array<any> = [];
  
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getSchools();
  }

  getSchools(){
    firebase.database().ref("Anm Assigns").child(this.user).once("value",snapitem=>{
      snapitem.forEach(snip=>{
        var temp : any = snip.val();
        temp.key = snip.key;
        console.log(temp)
        this.activeJobs.push(temp);
      })
    })
  }



}
