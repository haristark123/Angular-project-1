import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]',
})
export class BetterHighlightDirectiveDirective implements OnInit {
  @Input() defaultColor: any;
  @Input() highColor: any = '';
  @HostBinding('style.backgroundColor') color: any;

  constructor(private elemref: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(this.elemref.nativeElement,'background-color','blue')
    // this.renderer.setStyle(this.elemref.nativeElement,'color','white')
    this.color = this.color.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elemref.nativeElement,'background-color','blue')
    // this.renderer.setStyle(this.elemref.nativeElement,'color','white')
    // this.renderer.setStyle(this.elemref.nativeElement,'cursor','pointer')
    this.color = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elemref.nativeElement,'background-color','transparent')
    // this.renderer.setStyle(this.elemref.nativeElement,'color','black')
    // this.renderer.setStyle(this.elemref.nativeElement,'cursor','pointer')
    this.color = 'white';
  }
}
