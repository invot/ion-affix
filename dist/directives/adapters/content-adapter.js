"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
class ContentAdapter {
    constructor(content) {
        this.content = content;
    }
    onScroll() {
        return rxjs_1.merge(this.content.ionScrollStart, this.content.ionScroll, this.content.ionScrollEnd);
    }
    getClientTop() {
        return this.content.getScrollElement().getBoundingClientRect().top;
    }
    getScrollTop() {
        return this.content.getScrollElement().scrollTop;
    }
    appendFixedHeader(headerElement) {
        this.content.getNativeElement().appendChild(headerElement);
    }
    isScrollingDown() {
        return this.content.directionY === 'down';
    }
}
exports.ContentAdapter = ContentAdapter;
