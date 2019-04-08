import { customElement, inject } from 'aurelia-framework';
import { Panel, IPanelProps, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { bindable, bindingMode } from 'aurelia-framework';
import { DuReactWrapperBaseClass } from './DuPanelReactWrapperBaseClass';

@inject(Element)
@customElement('du-panel')
export class DuPanel extends DuReactWrapperBaseClass
{
  constructor(element) {
    super(element);
    this.log.debug("DuPanel constructor");
    this.hiddenIsHidden = false;
    this.hiddenName = "isOpen";
  }
  detached()
  {
    this.log.debug("DuPanel detached");
  }

  attached()
  {
    this.log.debug('DuPanel attached, inneridAurelia=' + this.inneridAurelia);
    var a:IPanelProps = {};
    a.isOpen = this.isOpen;
    a.onDismiss = this.onDismiss;
    a.headerText = this.headerText;
    a.type = this.type;
    this.renderReact(Panel,a);
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"isOpen" 
  ,attribute: "is-open" 
}) 
  public isOpen:boolean = false;

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"type" 
  ,attribute: "type" 
}) 
  public type:PanelType;

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onDismiss" 
  ,attribute: "on-dismiss" 
}) 
  public onDismiss:any;


  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"headerText" 
  ,attribute: "header-text" 
}) 
  public headerText:string;
}

