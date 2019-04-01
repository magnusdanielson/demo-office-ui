import { customElement, inject, noView, inlineView } from 'aurelia-framework';
import { IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { bindable, bindingMode } from 'aurelia-framework';
import { DuReactWrapperBaseClass } from './DuReactWrapperBaseClass';

@noView()
//@inlineView('<template><div><slot></slot></div></template>')
@inject(Element)
@customElement('du-dialog2')
export class DuDialog2 extends DuReactWrapperBaseClass
{
  constructor(element) {
    super(element);
    console.log("DuDialog2 constructor");
  }

  detached()
  {
      console.log("DuDialog2 detached");
  }

  attached()
  {
    this.log.debug('DuDialog2 attached ' + this.innerid);
  }

  setHidden(newValue:any,previousValue:any)
  {
    console.log("setHidden");
    console.log(newValue);
    console.log(previousValue);
    console.log(this.reactComponent);

    let auelement = this.element.getElementsByTagName("au-content")[0];

    if(newValue)
    {
      
      var oldParent = document.getElementById(this.innerid.toString());
        
      if(oldParent == null)
      {
        return;
      }

      while (oldParent.childNodes.length > 0) {
        auelement.appendChild(oldParent.childNodes[0]);
      }

      auelement.className = "aurelia-hide";
    }
    else
    {
      auelement.className = "";
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

