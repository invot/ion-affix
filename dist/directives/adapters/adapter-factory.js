"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angular_1 = require("@ionic/angular");
const content_adapter_1 = require("./content-adapter");
function adapterFactory(container) {
    if (container instanceof angular_1.IonContent) {
        return new content_adapter_1.ContentAdapter(container);
    }
    throw 'Invalid container element (only ion-content and ion-scroll currently supported)';
}
exports.adapterFactory = adapterFactory;
