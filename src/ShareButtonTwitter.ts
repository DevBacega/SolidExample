import AbstractLinkShareButtom from './AbstractLinkShareButtom';
import IEventHandler from './IEventHandler';


export default class ShareButtomTwitter extends AbstractLinkShareButtom {
 
    constructor(eventHandler: IEventHandler, clazz: string, url:string) {
        super(eventHandler, clazz, url);
    }

   createLink(): string {
      return `https://twitter.com/share?url=${this.url}`;
   }
}