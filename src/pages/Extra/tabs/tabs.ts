import { Component } from '@angular/core';
import { ReportsPage } from '../../Main Tabs/reports/reports';
import { FollowUpPage } from '../../Main Tabs/follow-up/follow-up';
import { ActiveJobsPage } from '../../Main Tabs/active-jobs/active-jobs';
import { DataEntryPage } from '../../Main Tabs/data-entry/data-entry';
import { ProfilePage } from '../../Main Tabs/profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReportsPage;
  tab2Root = FollowUpPage;
  tab3Root = ActiveJobsPage;
  tab4Root = DataEntryPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
