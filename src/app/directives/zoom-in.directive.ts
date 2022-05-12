import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomIn('scale(1.05)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomIn('none');
  }

  private zoomIn(transform: string): void {
    this.element.nativeElement.style.transform = transform;
  }

}
