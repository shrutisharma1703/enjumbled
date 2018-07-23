import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
      renderer.addClass(elem.nativeElement, 'highlight');
  }

}
