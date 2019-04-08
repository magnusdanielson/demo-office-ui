import { DialogType, IDialogProps } from "office-ui-fabric-react/lib/Dialog";
import { IPanelProps,PanelType } from 'office-ui-fabric-react/lib/Panel';
//import { DuDialog2 } from "./DuDialog2";

export class test {
  hidden: boolean = false;

  isOpen:boolean = false;

  counter: number = 0;
  //mytest2: DuDialog2;
  

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
    
      this.dialogprops.dialogContentProps.title += "!";
      // WWWWWWWWOOOOOOOOOOORRRRRRRRRKKKKKKKKKKKK    HEEEEREEEE
      // Alla nedan funkar. Vilken vill vi ha?
      
      //this.mytest2.hidden = true;
      //this.mytest2.setHidden(true,false);
      this.hidden = true;

    },
    hidden:this.hidden
    
  }

  panelprops:IPanelProps=
  {
    isOpen : this.isOpen,
    type : PanelType.smallFixedFar,
    onDismiss: ()=>
    {
      console.log("test Panel dismiss");
      console.log(this);
      this.isOpen = false;

    },
    headerText:"Panel - Small, right-aligned, fixed, with footer"
  };


  swapHidden()
  {

    this.hidden = ! this.hidden;
  }

  isOpenSwap() {
    //this.hidden = ! this.hidden;
    this.isOpen = ! this.isOpen;
  }



  constructor() {
    console.log("test ctor");
    // setInterval(()=>
    // {
    //   this.panelprops.headerText += "!";
    // },10000);

  }
}
