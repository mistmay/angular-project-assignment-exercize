import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverLi]'
})
export class HoverLiDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('transparent');
  }

  private hover(background: string): void {
    this.element.nativeElement.style.backgroundColor = background;
  }

}
