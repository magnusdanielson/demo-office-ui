import { IPanelProps,PanelType } from 'office-ui-fabric-react/lib/Panel';
import {IDuReactWrapper} from '@dunite/au-office-ui/dist/commonjs/resources/wrapper/IDuReactWrapper'

export class panel {

  isOpen:boolean = false;

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



  isOpenSwap(this:IDuReactWrapper) 
  {
    this.parent.isOpen = ! this.parent.isOpen;
  }
}
