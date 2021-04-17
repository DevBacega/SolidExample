import ShareButtomTwitter from './ShareButtonTwitter';
import ShareButtomFacebook from './ShareButtonFacebook';
import ShareButtomLinkedin from './ShareButtonLinkedin';
import ShareButtomPrint from './ShareButtonPrint';
import AbstractShareButtom from './AbstractShareButtom';
import DOMEventHandler from './DOMEventHandler';
import MockEventHandler from './MockEventHandler';


const eventHandler = new MockEventHandler();

const twitter: AbstractShareButtom = new ShareButtomTwitter(eventHandler,".btn-twitter", "https://www.github.com/devbacega");
twitter.bind();
const facebook: AbstractShareButtom = new ShareButtomFacebook(eventHandler,".btn-facebook", "https://www.github.com/devbacega");
facebook.bind();
const linkedin: AbstractShareButtom = new ShareButtomLinkedin(eventHandler,".btn-linkedin", "https://www.github.com/devbacega");
linkedin.bind();
const print: AbstractShareButtom = new ShareButtomPrint(eventHandler,"btn.print");
print.bind();