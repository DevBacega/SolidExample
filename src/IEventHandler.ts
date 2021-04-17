export default interface IEventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any);
}