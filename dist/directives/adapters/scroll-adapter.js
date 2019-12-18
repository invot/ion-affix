"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Scroll } from 'ionic-angular';
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
class ScrollAdapter {
    constructor(scroll) {
        this.scroll = scroll;
        this.scrollingDown = false;
    }
    onScroll() {
        return rxjs_1.fromEvent(this.scroll._scrollContent.nativeElement, 'scroll')
            .pipe(operators_1.map(() => this.getScrollTop()), operators_1.pairwise(), operators_1.tap((scrollTops) => this.scrollingDown = scrollTops[0] - scrollTops[1] < 0));
    }
    getClientTop() {
        return 0;
    }
    getScrollTop() {
        return this.scroll._scrollContent.nativeElement.scrollTop;
    }
    appendFixedHeader(headerElement) {
        this.scroll._scrollContent.nativeElement.parentElement.appendChild(headerElement);
    }
    isScrollingDown() {
        return this.scrollingDown;
    }
}
exports.ScrollAdapter = ScrollAdapter;
