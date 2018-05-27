import { Directive, Input, ElementRef, HostListener } from '@angular/core';

// 高亮指令：注入组件的 DOM 元素
@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('appHighLight')
    highLightColor: string;

    private ele: HTMLElement;

    constructor(eleRef: ElementRef) {
        this.ele = eleRef.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highLight(this.highLightColor || 'cyan');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highLight(null);
    }

    private highLight(color: string) {
        this.ele.style.backgroundColor = color;
    }
}
