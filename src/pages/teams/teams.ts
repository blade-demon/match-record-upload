import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: {index, name, image}[] = [];
  selectedTeam: any;
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.teams = [{
      index: 1,
      name: '亚特兰大老鹰',
      image: 'assets/imgs/teams/ATL.svg'
    }, {
      index: 2,
      name: '布鲁克林篮网',
      image: 'assets/imgs/teams/BKN.svg'
    }, {
      index: 3,
      name: '波士顿凯尔特人',
      image: 'assets/imgs/teams/BOS.svg'
    }, {
      index: 4,
      name: '夏洛特黄蜂',
      image: 'assets/imgs/teams/CHA.svg'
    }, {
      index: 5,
      name: '芝加哥公牛',
      image: 'assets/imgs/teams/CHI.svg'
    }, {
      index: 6,
      name: '克利夫兰骑士',
      image: 'assets/imgs/teams/CLE.svg'
    }, {
      index: 7,
      name: '达拉斯小牛',
      image: 'assets/imgs/teams/DAL.svg'
    }, {
      index: 8,
      name: '丹佛掘金',
      image: 'assets/imgs/teams/DEN.svg'
    }, {
      index: 9,
      name: '底特律活塞',
      image: 'assets/imgs/teams/DET.svg'
    }, {
      index: 10,
      name: '金州勇士',
      image: 'assets/imgs/teams/GSW.svg'
    }, {
      index: 11,
      name: '休斯敦火箭',
      image: 'assets/imgs/teams/HOU.svg'
    }, {
      index: 12,
      name: '印第安纳步行者',
      image: 'assets/imgs/teams/IND.svg'
    }, {
      index: 13,
      name: '洛杉矶快船',
      image: 'assets/imgs/teams/LAC.svg'
    },
    {
      index: 14,
      name: '洛杉矶湖人',
      image: 'assets/imgs/teams/LAL.svg'
    },
    {
      index: 15,
      name: '孟菲斯灰熊',
      image: 'assets/imgs/teams/MEM.svg'
    },
    {
      index: 16,
      name: '迈阿密热火',
      image: 'assets/imgs/teams/MIA.svg'
    }, {
      index: 17,
      name: '密尔沃基雄鹿',
      image: 'assets/imgs/teams/MIL.svg'
    },
    {
      index: 18,
      name: '明尼苏达森林狼 ',
      image: 'assets/imgs/teams/MIN.svg'
    }, {
      index: 19,
      name: '新奥尔良鹈鹕',
      image: 'assets/imgs/teams/NOP.svg'
    },
    {
      index: 20,
      name: '纽约尼克斯',
      image: 'assets/imgs/teams/NYK.svg'
    },
    {
      index: 21,
      name: '俄克拉荷马雷霆',
      image: 'assets/imgs/teams/OKC.svg'
    }, {
      index: 22,
      name: '奥兰多魔术',
      image: 'assets/imgs/teams/ORL.svg'
    }, {
      index: 23,
      name: '费城76人',
      image: 'assets/imgs/teams/PHI.svg'
    }, {
      index: 24,
      name: '菲尼克斯太阳',
      image: 'assets/imgs/teams/PHX.svg'
    }, {
      index: 25,
      name: '波特兰开拓者',
      image: 'assets/imgs/teams/POR.svg'
    }, {
      index: 26,
      name: '萨克拉门多国王',
      image: 'assets/imgs/teams/SAC.svg'
    }, {
      index: 27,
      name: '圣安东尼奥马刺',
      image: 'assets/imgs/teams/SAS.svg'
    }, {
      index: 28,
      name: '多伦多猛龙',
      image: 'assets/imgs/teams/TOR.svg'
    }, {
      index: 29,
      name: '犹他爵士',
      image: 'assets/imgs/teams/UTA.svg'
    }, {
      index: 30,
      name: '华盛顿奇才',
      image: 'assets/imgs/teams/WAS.svg'
    }];
  }

  selectTeam(team: NavParams) {
    this.selectedTeam = team;
    this.viewCtrl.dismiss(this.selectedTeam);
  }

  dismiss() {
    this.viewCtrl.dismiss(null);
  }
}
