import IEventHandler from './IEventHandler'

export default class MockEventHandler implements IEventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any) {
        console.log(clazz, event,fn);

    }
}