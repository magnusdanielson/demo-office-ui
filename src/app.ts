import {MySpecialService} from '@dunite/au-office-ui';
import {ButtonType} from '@dunite/au-office-ui';


export class App {
  message = 'Hello World!';
  type:ButtonType = ButtonType.hero;
  myservice:MySpecialService;

  hoj()
  {
    console.log("hoj");
    console.log(this.type);
    console.log(ButtonType);
  }
  topp()
  {
    //this.type = ButtonType.primary;
    //this.mytype = ButtonType.compound;
    this.myservice.doServiceThings();
  }
}
