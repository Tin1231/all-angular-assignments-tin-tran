import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective implements OnChanges {
  @Input('appTextColor') color = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
}