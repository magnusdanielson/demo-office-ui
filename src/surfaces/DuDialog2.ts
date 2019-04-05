import { customElement, inject, inlineView } from 'aurelia-framework';
import { IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { bindable, bindingMode } from 'aurelia-framework';
import { DuReactWrapperBaseClass } from './DuReactWrapperBaseClass';


@inlineView('<template><div id.bind="inneridAurelia" show.bind="!hidden"><slot></slot></div></template>')
@inject(Element)
@customElement('du-dialog2')
export class DuDialog2 extends DuReactWrapperBaseClass
{
  constructor(element) {
    super(element);
    this.log.debug("DuDialog2 constructor");
  }
  detached()
  {
    this.log.debug("DuDialog2 detached");
  }

  attached()
  {
    this.log.debug('DuDialog2 attached, inneridAurelia=' + this.inneridAurelia);
  }

  setHidden(newValue:any,previousValue:any)
  {
    this.log.debug("setHidden");
    this.log.debug(newValue);
    this.log.debug(previousValue);
    //console.log(this.reactComponent);

    //@ts-ignore
    let auelement = document.getElementById(this.inneridAurelia);

    if(newValue)
    {
      var oldParent = document.getElementById(this.reactComponent.inneridReact);
        
      if(oldParent == null)
      {
        return;
      }

      while (oldParent.childNodes.length > 0) {
        auelement.appendChild(oldParent.childNodes[0]);
      }
    }
    this.hidden = newValue;
    this.reactComponent.setState({hidden:newValue});
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"props" 
  ,attribute: "props" ,changeHandler: 'renderReact',
}) 
  public props:IDialogProps = {};

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"hidden" 
  ,attribute: "hidden" ,changeHandler: 'setHidden',
}) 
  public hidden:boolean = false;

  public bind(bindingContext) {
    this.log.debug('DuDialog2 bind');
    if ( bindingContext !== null)
    {
        this.parent = bindingContext;
    }
    this.renderReact();
  }
}

