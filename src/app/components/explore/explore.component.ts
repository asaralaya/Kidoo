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
  category = ''
  constructor(public contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  themeChange(data: any) {
    this.contentService.searchContent().subscribe(
      (res) => {
        console.log(res.result.content);
      }, (err) => console.error(err)

    );
  }

  categoryChange(data: any) {
    console.log(data)
  }

  openDialog(val: any): void {
    let data: any = ''

    switch (val) {
      case 1:
        data = "This will help your child so that she:“Innovates and works imaginatively to express ideas and emotions through the arts”"
        val = val
        break;

      case 2:
        data = "This will help your child so that she:“Reads short poems and begins to appreciate the poem for its choice of words and imagination”"
        val = val
        break;

      case 3:
        data = "This will help your child so that she:-Shows curiosity in observing plants and animals-Recognizes as sight words of their names and through labels of objects in their environment"
        val = val
        break;
    }

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: data

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../dialog/dialog.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  topage(page: any) {

    switch (page) {
      case 1:
        window.open("https://diksha.gov.in/play/collection/do_313721386759561216111783?contentType=Collection");
        break;

      case 2:
        window.open("https://diksha.gov.in/play/collection/do_31372003855044608016192?contentType=Collection");
        break;

      case 3:
        window.open("https://diksha.gov.in/play/content/do_31371716589478707217308?contentType=Resource");
        break;
    }
  }
}
