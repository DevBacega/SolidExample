import AbstractLinkShareButtom from './AbstractLinkShareButtom';
import IEventHandler from './IEventHandler';


export default class ShareButtomFacebook extends AbstractLinkShareButtom {
 
    constructor(eventHanlde: IEventHandler, clazz: string, url:string) {
        super(eventHanlde, clazz, url);
    }

   createLink(): string {
      return `https://facebook.com/sharer.php?u=${this.url}`;
   }
}