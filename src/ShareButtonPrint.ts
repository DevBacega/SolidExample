import AbstractShareButtom from './AbstractShareButtom';
import IEventHandler from './IEventHandler';


export default class ShareButtomPrint extends AbstractShareButtom {
 
    constructor(eventHandle: IEventHandler, clazz: string) {
        super(eventHandle, clazz);
    }

   createAction(): any {
      return () => window.print();
   }
}