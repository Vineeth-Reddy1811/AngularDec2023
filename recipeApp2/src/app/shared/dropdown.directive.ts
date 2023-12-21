import { Directive, Renderer2,ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})

//It will load a CSS file when we click the element it sits on, and remove if we click agian.
export class DropdownDirective{

    @HostBinding('class.open' )isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
     }

}