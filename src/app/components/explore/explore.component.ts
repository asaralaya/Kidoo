import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  theme = '';
  language = '';
  type = '';

  source = [{
    id: 1,
    title: "কুকুৰা পোৱালিৰ ভয় (The chicks fear)",
    type: "Video",
    about: "Birds",
    icon:"../../../assets/icons/The chicks fear.png",
    lan: "Assamese",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    language: "efln_as",
    theme: 'efln_brd',
    typec: 'efln_vid',
    objective: "Develops Observation, wonder, curiosity, and exploration",
    source:"Pratham"
  },
  {
    id: 2,
    title: "Jackal and the Drum",
    icon:"../../../assets/icons/jackal-drum.png",
    type: "Read Along",
    about: "Animals",
    lan: "English",
    url: "https://diksha.gov.in/play/content/do_31381695158648012811422",
    language: "efln_en",
    theme: 'efln_anm',
    typec: 'efln_rda',
    objective: "Differentiates sounds by their pitch, volume and sound patterns",
    source:"DIKSHA"
  },
  {
    id: 3,
    title: "રિયાની લાલ છત્રી (Riya's umbrella)",
    icon:"../../../assets/icons/Riya_s umbrella.png",
    type: "Read",
    about: "Birds",
    lan: "Gujarati",
    url: "https://diksha.gov.in/play/content/do_31373422751785779217395",
    language: "efln_gj",
    theme: 'efln_brd',
    typec: 'efln_rd',
    objective: "Shows care for and joy in engaging with all life forms",
    source:"DIKSHA"
  },
  {
    id: 4,
    title: "कच..कच.. (Kach..Kach..)",
    type: "Audio",
    icon:"../../../assets/icons/kachkach.png",
    about: "Animals",
    lan: "Hindi",
    url: "https://www.prathamyouthnet.org/story/listen/listen.php?nodeid=season1_hi_02&parentnode=season1_hindi",
    language: "efln_hi",
    theme: 'efln_anm',
    typec: 'efln_aud',
    objective: "Comprehends narrated/read-out stories and identifies characters, storyline and what the author wants to say",
    source:"Pratham"
  },
  {
    id: 5,
    title: "आंब्याचं झाड (Mango Tree)",
    type: "Read Along",
    icon:"../../../assets/icons/MangoTree.png",
    about: "Nature",
    lan: "Marathi",
    url: "https://prathamopenschool.org/CourseContent/Games/Ambyanch_Zad_MR/index.html",
    language: "efln_mar",
    theme: 'efln_ntr',
    typec: 'efln_rda',
    objective: "Shows kindness and helpfulness to others (including animals, plants) when they are in need",
    source:"Pratham"
  },
  {
    id: 6,
    title: "கதை 17 - Aaloo-Maaloo-Kaaloo",
    type: "Read Along",
    icon:"../../../assets/icons/aloomaloo.png",
    about: "Vegetables",
    lan: "Tamil",
    url: "https://diksha.gov.in/play/content/do_31304881219099033611457",
    language: "efln_ta",
    theme: 'efln_veg',
    typec: 'efln_rda',
    objective: "Demonstrates willingness and participation in age-appropriate physical work towards helping others",
    source:"DIKSHA"
  },
  {
    id: 7,
    title: "என் நண்பர்கள் (My Friends)",
    type: "Read",
    icon:"../../../assets/icons/My Friends.jpg",
    about: "Relations",
    lan: "Tamil",
    url: "https://storyweaver.org.in/stories/378-en-nanbargal",
    language: "efln_ta",
    theme: 'efln_rel',
    typec: 'efln_rd',
    objective: "Interacts comfortably with other children and adults",
    source:"Storyweaver"
  },
  {
    id: 8,
    title: "कौआ और स्ट्रॉ",
    type: "Sign Language",
    icon:"../../../assets/icons/CrowStraw.png",
    about: "Birds",
    lan: "Hindi",
    url: "https://diksha.gov.in/play/content/do_313735563301134336127",
    language: "efln_hi",
    theme: 'efln_brd',
    typec: 'efln_sgn',
    objective: "Observes and understands different categories of objects and relationships between them",
    source:"DIKSHA"
  }
  ]

  data = this.source
  constructor(public contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  themeChange() {
    this.data = this.source.filter((item) => {
      return (this.language && this.type) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.language && !this.type) ? (item.language === this.language && item.theme === this.theme) : (!this.language && this.type) ? (item.typec === this.type && item.theme === this.theme) : item.theme === this.theme;
    })
  }

  languageChange() {
    this.data = this.source.filter((item) => {
      return (this.theme && this.type) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.type && !this.theme) ? (item.typec === this.type && item.language === this.language) : (!this.type && this.theme) ? (item.theme === this.theme && item.language === this.language) : item.language === this.language;
    })
  }

  typeChange() {
    this.data = this.source.filter((item) => {
      return (this.theme && this.language) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.language && !this.theme) ? (item.language === this.language && item.typec === this.type) : (!this.language && this.theme) ? (item.theme === this.theme && item.typec === this.type) : item.typec === this.type;
    })
  }

  clicked() {
    this.language = '';
    this.theme = ''
    this.type = ''
    this.data = this.source
  }

  openDialog(val: any): void {
    let data = this.source[val - 1]

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../dialog/dialog.component.html',
  styleUrls: ['../dialog/dialog.component.scss']

})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigate(url: any) {
    window.open(url)
  }
}
