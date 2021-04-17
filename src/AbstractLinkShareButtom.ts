import AbstractShareButtom from './AbstractShareButtom';
import IEventHandler from './IEventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButtom {
    
    url: string;

    constructor(eventHandler: IEventHandler,clazz: string, url: string) {
        super(eventHandler,clazz);
        this.url = url;
        
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link)
    }
}