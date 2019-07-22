import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearchHighlight]'
})
export class SearchHighlightDirective {
  constructor(private el: ElementRef) { }

  @Input ('appSearchHighlight') public searchImage: string;

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles('fa fa-bars');
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles('fa fa-search');
  }

  applyStyles(image: string): void {
    this.el.nativeElement.className = image;
  }
}
