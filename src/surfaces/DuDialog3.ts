import { customElement, inject } from 'aurelia-framework';
import { Dialog, IDialogProps, DialogType, IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog';
import { bindable, bindingMode } from 'aurelia-framework';
import { DuReactWrapperBaseClass } from './DuPanelReactWrapperBaseClass';

let reactprops: IDialogProps = <IDialogProps>{};
reactprops.dialogContentProps = <any>{};
reactprops.hidden = <any>{};
reactprops.className = <any>{};
reactprops.modalProps = <any>{};
reactprops.onDismiss = <any>{};

@inject(Element)
@customElement('du-dialog3')
export class DuDialog3  extends DuReactWrapperBaseClass implements IDialogProps
{
  constructor(element) {
    super(element);
    this.log.debug("DuPanel constructor");
    this.hiddenIsHidden = true;
    this.hiddenName = "hidden";
  }

  hidden:boolean;
  
  attached()
  {
    this.log.debug('DuPanel attached, inneridAurelia=' + this.inneridAurelia);
    this.renderReact(Dialog,this.createState(reactprops));
  }

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"dialogContentProps" 
//   ,attribute: "dialog-content-props" 
// }) 
//   public dialogContentProps:IDialogContentProps;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"modalProps" 
//   ,attribute: "modal-props" 
// }) 
//   public modalProps:IModalProps;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onDismiss" 
//   ,attribute: "on-dismiss" 
// }) 
//   public onDismiss:any;


//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"hidden" 
//   ,attribute: "hidden" 
// }) 
//   public hidden:boolean;
}


addProperties(DuDialog3,reactprops);

function addProperties(aureliaClass: any, reactprops: any) {
  var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
  for (let i = 0; i < reactpropNames.length; i++) {
    let renderPropName = reactpropNames[i];
    bindable({
      name: renderPropName,
      attribute: camelToKebab(renderPropName),
      defaultBindingMode: bindingMode.twoWay
    })(aureliaClass);
  }
}

export function camelToKebab(str) {
  // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
  //@ts-ignore
  return str.replace(/([a-zA-Z])([A-Z][a-z])/g, (match, before, after) => {
      return `${before.toLowerCase()}-${after.toLowerCase()}`;
  }).toLowerCase();
}