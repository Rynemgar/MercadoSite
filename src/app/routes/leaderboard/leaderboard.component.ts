import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard = [];
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { name: 'Username', summaryFunc: () => null },
    { prop: 'Level', summaryFunc: () => null },
    { prop: 'Wins', summaryFunc: () => null },
    { prop: 'Losses', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getLeaderboard()
      .subscribe((leaderboard: any[]) => {
        this.leaderboard = leaderboard;
        this.loadingIndicator = false;
      });
  }

}
