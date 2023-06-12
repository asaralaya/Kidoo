import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

class Eye {
  constructor(
    private pupilDirection: ElementRef,
    private pupilPositionX: number,
    private pupilPositionY: number
  ) { }

  findAngle(cursorY: number, cursorX: number) {
    let angleDeg =
      (Math.atan2(
        cursorY - this.pupilPositionY,
        cursorX - this.pupilPositionX
      ) *
        180) /
      Math.PI;
    angleDeg =
      angleDeg >= 360
        ? (angleDeg -= 360)
        : angleDeg < 0
          ? (angleDeg += 360)
          : (angleDeg -= 360);
    this.rotatePupil(angleDeg);
  }

  rotatePupil(angleDeg: number) {
    if (this.pupilDirection) this.pupilDirection.nativeElement.style.transform = `rotate(${angleDeg}deg)`;
  }
}

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.scss'],
})
export class EyeComponent {
  @ViewChild('rightPupil') rightPupil!: ElementRef;
  @ViewChild('leftPupil') leftPupil!: ElementRef;

  rightEye!: Eye;
  leftEye!: Eye;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      const rightPupilPositionInfo =
        this.rightPupil?.nativeElement.getBoundingClientRect();
      const leftPupilPositionInfo =
        this.leftPupil?.nativeElement.getBoundingClientRect();
      // @ts-ignore
      this.rightEye = new Eye(
        // @ts-ignore
        this.rightPupil,
        rightPupilPositionInfo?.x,
        rightPupilPositionInfo?.y
      );
      // @ts-ignore
      this.leftEye = new Eye(
        // @ts-ignore
        this.leftPupil,
        leftPupilPositionInfo?.x,
        leftPupilPositionInfo?.y
      );
    }, 2000);
  }

  @HostListener('document:mousemove', ['$event'])
  getCursorCoordinates(event: MouseEvent) {

    const cursorY = event.clientY;
    const cursorX = event.clientX;
    // @ts-ignore
    this.rightEye?.findAngle(cursorY, cursorX);
    // @ts-ignore
    this.leftEye?.findAngle(cursorY, cursorX);
  }
}
