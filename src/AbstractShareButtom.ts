import IEventHandler from "./IEventHandler";
import DomEventHandler from './DOMEventHandler';

export default abstract class AbstractShareButtom {
    eventHandler: IEventHandler;
    clazz: string;
    constructor(eventHandler: IEventHandler, clazz: string) {
        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }

  abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action)
    }
}