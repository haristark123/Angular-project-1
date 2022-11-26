import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') setOpen = false;
  @HostBinding('style.backgroundColor') setColor: any;

  constructor() {}

  @HostListener('click') setDropdown(eventData: Event) {
    this.setOpen = !this.setOpen;
    console.log(this.setOpen);
    this.setColor = 'pink';
  }
}
