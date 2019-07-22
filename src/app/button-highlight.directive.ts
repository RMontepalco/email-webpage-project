import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonHighlight]'
})
export class ButtonHighlightDirective {
  constructor(private el: ElementRef) { }

  @Input ('appButtonHighlight') public highlightColor: string;

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles('rgb(120, 120, 255)', null, null);
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles(null, null, null);
  }

  applyStyles(backgroundColor: string, width: string, height: string): void {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.width = width;
    this.el.nativeElement.style.height = height;
  }
}
