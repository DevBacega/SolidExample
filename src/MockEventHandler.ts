import IEventHandler from './IEventHandler'

export default class DOMEventHandler implements IEventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any) {
        const elements: any = document.querySelectorAll(clazz);
        for (const element of elements) {
            element.addEventListener(event,fn);
        }

    }
}