import { DialogType } from 'office-ui-fabric-react/lib/Dialog';

export class test
{
    hidden:boolean = false;

    onDismiss()
    {
        console.log("ondismiss");
        console.log(this);
        window['mydialog']=this;
        this.hidden = ! this.hidden;
        
        
    }
    dialogContentProps:any;
    modalProps:any;
    mydialog:any;

    doit()
    {
      console.log("doit");
    }
    actionButtonClick()
    {
        console.log("sdsd");
        //@ts-ignore
        this.parent.hidden = ! this.parent.hidden;
        //@ts-ignore
        console.log(this.parent);
        //@ts-ignore
        this.parent.dialogContentProps = {
            type: DialogType.normal,
            //@ts-ignore
            title: this.parent.dialogContentProps +'!',
            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
          };
        
        this.modalProps = {
            titleAriaId: 'myLabelId',
            subtitleAriaId: 'mySubTextId',
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }
    }
    constructor()
    {
        console.log("SDFSDFSDF");
        this.dialogContentProps = {
            type: DialogType.normal,
            title: 'All emails together',
            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
          };
        
        this.modalProps = {
            titleAriaId: 'myLabelId',
            subtitleAriaId: 'mySubTextId',
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }

          
    }
}