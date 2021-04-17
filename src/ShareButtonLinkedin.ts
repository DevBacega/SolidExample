import AbstractLinkShareButtom from './AbstractLinkShareButtom';
import IEventHandler from './IEventHandler';


export default class ShareButtomLinkedin extends AbstractLinkShareButtom {
 
    constructor(eventHanlde: IEventHandler, clazz: string, url:string) {
        super(eventHanlde, clazz, url);
    }

   createLink(): string {
      return `https://linkedin.com/shareArticle?url=${this.url}`;
   }
}