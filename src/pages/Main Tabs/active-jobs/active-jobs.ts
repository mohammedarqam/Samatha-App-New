import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-active-jobs',
  templateUrl: 'active-jobs.html',
})
export class ActiveJobsPage {

  ajRef = this.db.list("Anm Assigns");
  activejobs : Array<any> = [];

  constructor(
  public navCtrl: NavController,
  public db : AngularFireDatabase, 
  public navParams: NavParams,
  ) {
    this.getActiveJobs();
  }

  getActiveJobs(){
    this.ajRef.snapshotChanges().subscribe(snap=>{
      this.activejobs = [];
      snap.forEach(snip=>{
        var temp : any = snip.payload.val();
        temp.key = snip.payload.key;
        this.activejobs.push(temp);
      })
      console.log( this.activejobs);
    })
  }

}
