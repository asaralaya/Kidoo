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
  language = ''

  source = [{
    id: 1,
    title: "Donkey and the Elephant",
    type: "Puppet",
    about: "Animals",
    lan:"English",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_eng",
    theme: 'efln_animals',
    objective: "This will help your child so that she:“Innovates and works imaginatively to express ideas and emotions through the arts”",
  },
  {
    id: 2,
    title: "चींटी और गेंडा",
    type: "Poem",
    about: "Animals",
    lan:"Hindi",
    url: "https://diksha.gov.in/play/collection/do_31372003855044608016192?contentType=Collection",
    language: "efln_hin",
    theme: 'efln_animals',
    objective: "This will help your child so that she:“Reads short poems and begins to appreciate the poem for its choice of words and imagination”"
  },
  {
    id: 3,
    title: "Lion Flashcard",
    type: "Flashcard",
    about: "Animals",
    lan:"English",
    url: "https://diksha.gov.in/play/content/do_31371716589478707217308?contentType=Resource",
    language: "efln_eng",
    theme: 'efln_animals',
    objective: "This will help your child so that she:-Shows curiosity in observing plants and animals-Recognizes as sight words of their names and through labels of objects in their environment"
  },
  {

    id: 4,
    title: "Food Series",
    type: "Video",
    about: "Food",
    lan:"Kannada",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_kan",
    theme: 'efln_food',
    objective: "This will help your child so that she:“Innovates"

  },
  {

    id: 5,
    title: "Food series -2",
    type: "Video",
    about: "Food",
    lan:"Kannada",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_kan",
    theme: 'efln_food',
    objective: "This will help your child so that she:“works imaginatively to express ideas and emotions through the arts”"

  },
  {
    id: 6,
    title: "Family Man",
    type: "Video",
    about: "Family",
    lan:"Hindi",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_hin",
    theme: 'efln_family',
    objective: "This will help your child so that she:“ express ideas and emotions through the arts”"

  },
  {
    id: 7,
    title: "Protect Environment",
    type: "Interactive",
    about: "Environment",
    lan:"Kannada",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_kan",
    theme: 'efln_env',
    objective: "This will help your child so that she:“Innovates and works“"

  },
  {
    id: 8,
    title: "Know a plant",
    type: "Video",
    about: "plants",
    lan:"Kannada",
    url: "https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection",
    language: "efln_kan",
    theme: 'efln_plants',
    objective: "This will help your child so that she:“knows about plants“"

  }
  ]
  data = this.source
  constructor(public contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  themeChange() {
    this.data = this.source.filter((item) => {
      return this.language ? (item.theme === this.theme && item.language === this.language) : item.theme === this.theme;
    })
  }

  languageChange() {
    this.data = this.source.filter((item) => {
      return this.theme ? (item.language === this.language && item.theme === this.theme) : item.language === this.language;
    })
  }

  clicked() {
    this.language = '';
    this.theme = ''
    this.data = this.source
  }

  openDialog(val: any): void {
    console.log(val)
    console.log(this.source[val - 1])
    let data = this.source[val - 1]


    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: data,


    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

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
