import { IonAffixContainer } from '../ion-affix-container';
import { IonContent } from '@ionic/angular';
import { Observable, merge } from 'rxjs';

/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
export class ContentAdapter implements IonAffixContainer {

    constructor(public content: any) {
    }

    onScroll(): Observable<any> {
        return merge(this.content.ionScrollStart, this.content.ionScroll, this.content.ionScrollEnd);
    }

    getClientTop(): number {
        return this.content.getScrollElement().getBoundingClientRect().top;
    }

    getScrollTop(): number {
        return this.content.getScrollElement().scrollTop;
    }

    appendFixedHeader(headerElement: any): void {
        this.content.getNativeElement().appendChild(headerElement);
    }

    isScrollingDown(): boolean {
        return this.content.directionY === 'down';
    }
}
