import { ChangeDetectorRef, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {
  @Input("renklendir") color: string | undefined;
  constructor(private el: ElementRef, private _cdr: ChangeDetectorRef) { }
  @HostListener("click") onClick() {
    const icon = this.el.nativeElement.querySelector('mat-icon');
    if (icon) {
      icon.style.color = this.color || 'red';
      this._cdr.detectChanges()
    }
  }
}
