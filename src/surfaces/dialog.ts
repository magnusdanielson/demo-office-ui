import { DialogType,IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import {IDuReactWrapper} from '@dunite/au-office-ui/dist/commonjs/resources/wrapper/IDuReactWrapper'


export class dialog
{
    hidden:boolean = true;

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
      onDismiss : ()=>
      {
        this.dialogprops.dialogContentProps.title += "!";
        this.hidden = true;

      },
      hidden:this.hidden
    }

    actionButtonClick(this:IDuReactWrapper)
    {
        this.parent.hidden = ! this.parent.hidden;
    }

}
