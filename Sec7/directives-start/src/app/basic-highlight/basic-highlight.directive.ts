import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    // We change the background color of element we attach this to
    // we do injection
    //We pass the elements reference that this directive its on.
    constructor(private elementRef : ElementRef ){
    }

// We access this element ref in ngOnInit

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}