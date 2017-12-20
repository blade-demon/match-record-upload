import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController,ToastController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  playersId: string[];
  teams: any[];
  results: any[];
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public http: Http) {
    this.teams = [];
    this.playersId = [];
    this.results = [{
      "teamId": "",
      "score": "86",
      "shots": "23",
      "gotShots": "13",
      "gotThreePointsShots": "2",
      "threePointsShots": "2",
      "gotPenaltyShots": "8",
      "penaltyShots": "12",
      "fastBreakScore": "10",
      "freeThrowLaneScore": "16",
      "secondAttackScore": "4",
      "substituteScore": "0",
      "assists": "5",
      "offensiveRebounds": "5",
      "defensiveRebounds": "12",
      "steals": "3",
      "blockShots": "2",
      "turnovers": "0",
      "turnoverScores": "11",
      "teamFouls": "5",
      "maxLeadScore": "27",
      "possessionTimeMin": "4",
      "possessionTimeSec": "54",
      "remainingPauses": "2"
    }, {
      "teamId": "",
      "score": "61",
      "shots": "21",
      "gotShots": "5",
      "gotThreePointsShots": "3",
      "threePointsShots": "14",
      "gotPenaltyShots": "6",
      "penaltyShots": "8",
      "fastBreakScore": "3",
      "freeThrowLaneScore": "2",
      "secondAttackScore": "0",
      "substituteScore": "0",
      "assists": "4",
      "offensiveRebounds": "6",
      "defensiveRebounds": "9",
      "steals": "0",
      "blockShots": "1",
      "turnovers": "6",
      "turnoverScores": "0",
      "teamFouls": "7",
      "maxLeadScore": "0",
      "possessionTimeMin": "4",
      "possessionTimeSec": "59",
      "remainingPauses": "1",
    }];
  }

  selectTeam(playerIndex) {
    const modal = this.modalCtrl.create(TeamsPage);
    modal.onDidDismiss((team) => {
      if (team) {
        this.teams[playerIndex] = team;
        this.results[playerIndex].teamId = this.teams[playerIndex].index;
      } else {
        // console.log(`在第${matchIndex + 1}局比赛中，选手${playerIndex}选择的球队为空`);
      }
    })
    modal.present();
  }

  canSubmit() {
    if(this.results[0].teamId !="" && this.results[1].teamId !="" && this.playersId[0] != "" && this.playersId[1] != "" && this.playersId.length === 2) {
      return false;
    } else {
      return true;
    }
  }

  doSubmit() {
    const loading = this.loadingCtrl.create({
      content: '上传数据中...'
    });
    loading.present();
    this.http.post(`https://match-assistant-ziweigamepoch.c9users.io/api/results`, {
      results: this.results,
      matchIndex: 0,
      playersId: this.playersId
    }).subscribe(resp => {
      let data = resp.json();
      loading.dismiss();
      const toast = this.toastCtrl.create({
        message: '数据上传成功！',
        duration: 1000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();

      console.log(data);
    }, error => {
      console.log(error);
      loading.dismiss();
    })
  }

}
