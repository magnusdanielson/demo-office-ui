import { DialogType,IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { IPanelProps, PanelType } from 'office-ui-fabric-react/lib/Panel';

export class dialog
{
    hidden:boolean = true;
    isOpen:boolean = false;

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

  panelprops:IPanelProps =
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

  closeDialog()
  {

  }

    actionButtonClick()
    {
        console.log("sdsd");
        //@ts-ignore
        this.parent.hidden = ! this.parent.hidden;

    }
    constructor()
    {

    }

}
