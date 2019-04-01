import { DialogType, IDialogProps } from "office-ui-fabric-react/lib/Dialog";
import { DuDialog2 } from "./DuDialog2";

export class test {
  hidden: boolean = false;

  test2if: boolean = false;
  counter: number = 0;
  mytest2: DuDialog2;
  

  dialogprops:IDialogProps =
  {
    dialogContentProps : {
      type: DialogType.normal,
      title: 'A Title!',
      subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
    },
    modalProps : {
      titleAriaId: 'myLabelId',
      subtitleAriaId: 'mySubTextId',
      isBlocking: false,
      containerClassName: 'ms-dialogMainOverride',
      className : "magnus"
    },
    onDismiss : (that:any)=>
    {
      console.log("OLD DialogWrapper Dialog dismiss");
      console.log(this);
      console.log(that);
    
      // WWWWWWWWOOOOOOOOOOORRRRRRRRRKKKKKKKKKKKK    HEEEEREEEE
      // För många anrop nedan, borde kanske bli ett eller 2
      //.test2if = false;
      //this.mytest2.hidden = false;
      this.mytest2.setHidden(true,false);

    },
    hidden:false
    
  }


  swapHidden()
  {

    this.hidden = ! this.hidden;
  }

  test2ifSwap() {
    this.test2if = !this.test2if;
  }



  constructor() {
    console.log("test ctor");

  }
}
