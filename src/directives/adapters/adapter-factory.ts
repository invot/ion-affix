import { IonContent } from '@ionic/angular';
import { ContentAdapter } from './content-adapter';

export function adapterFactory (container:any) {
    if (container instanceof IonContent) {
        return new ContentAdapter(container);
    } 
    throw 'Invalid container element (only ion-content and ion-scroll currently supported)';
}
