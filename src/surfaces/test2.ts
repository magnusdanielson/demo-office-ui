import {  ViewCompiler, ViewResources, BehaviorInstruction, processContent, customElement, inject, noView } from 'aurelia-framework';
import { Button, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager, bindable, bindingMode } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';

class ReactWrapper2 {
    public element: HTMLElement;
    public container: HTMLElement;
    public reactComponent = {};
  
    public innerid:number;

    public parent: any;

    public log: Logger;

    constructor(element) {
      this.element = element;
      this.log = LogManager.getLogger('test2');
    }
  
  
    public defaultOnChangeEvent(propertyName: string, newValue: any)
    {
      this.log.debug('Default onChange event occurred on property ' + propertyName + ' with value ' + newValue);
        let propName = propertyName
              .substring(2, propertyName.length - 'Changed'.length)
              .toLowerCase();
            if (newValue != this[propName]) {
              this[propName] = newValue;
            }
            //this.bind(null,null);
    }
  
    public defaultActionEvent(propertyName: string, event: any)
    {
        this.log.debug('Default event occurred on property ' + propertyName + ' with event ' + event);
    }

    

    public unbind() {
      ReactDom.unmountComponentAtNode(this.element);
    }

    onChangeEvent(propertyName: string, newValue: any)
    {
      this.log.debug('onChangeEvent occurred on property ' + propertyName + ' with value ' + newValue);
      if (newValue != this[propertyName]) {
        this[propertyName] = newValue;
      }
    }
    

  renderReact() {

    this.log.debug('xxxx renderReact');
    // this is bound to Aurelia class
    this.container = this.element.querySelector('.au-react-root');
  
    if (this.container == null) {
      this.container = document.createElement('span');
      this.container.setAttribute('class', 'au-react-root');
      // <span id="${id}" portal="target ${id} ms-Label"><slot></slot></span>
      
      
      //this.container.setAttribute('id', id);
      //this.container.setAttribute('portal', `target #${id} ms-Label`);
      //let slot = document.createElement('slot');
      //this.container.appendChild(slot);
      this.element.appendChild(this.container);

      //const content = this.element.querySelector('au-content');
      //content.setAttribute('portal', `target #${id} ms-Label`);
    }
  
    console.log("OBJECT");
    console.log(this);
    
    let a:any = {};
    //@ts-ignore
    a.onClick = this.onClick;
    //@ts-ignore
    a.text = this.text;

    console.log("OBJECT A");
    console.log(a);
    

    this.innerid = Date.now();

    const reactElement = React.createElement(Button, a,
      React.createElement("span",{id:this.innerid}      ));
    this.reactComponent = reactElement;
    ReactDom.render(reactElement, this.container);
  }
  



  
}

function onlyAureliaBound(){};

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the DuCheckbox class with all properties added

// let reactprops: IButtonProps = <IButtonProps>{};
// reactprops.text = <any>{};
// reactprops.onClick = onlyAureliaBound;

//@ts-ignore
// @processContent((compiler: ViewCompiler, resources: ViewResources, node: Element, instruction: BehaviorInstruction
//   ): boolean => {
//     return elementWrapper(node, '.ms-Dialog-content');
//   }
//   )
@noView()
@inject(Element)
@customElement('test2')
export class test2 extends ReactWrapper2
{


  constructor(element) {
    super(element);
    this.element = element;
  }

  public render() {
    this.log.debug('render2');

    this.renderReact();
  }

  attached()
  {
    this.log.debug('attached2' + this.innerid);
    
    let auelement = this.element.getElementsByTagName("au-content")[0];

    var newParent = document.getElementById(this.innerid.toString());
    
    while (auelement.childNodes.length > 0) {
        newParent.appendChild(auelement.childNodes[0]);
    }


  }

  @bindable({ defaultBindingMode: bindingMode.twoWay }) 
  public text;

  @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onClick" 
  ,attribute: "on-click" 
}) 
  public onClick(){};

  public bind(bindingContext) {
    this.log.debug('bindxxx');
      if ( bindingContext !== null)
      {
          this.parent = bindingContext;
      }
      this.render();
  }

}

//addProperties(test2, reactprops);


function elementWrapper(node: Element, target: string)
{
  let id = 'du' + Math.round( Math.random() * 10000000000000000);
  node.setAttribute('class', (node.getAttribute('class') == null ? '' :  node.getAttribute('class')) + ' ' + id);
  
  let portalAttribute =  'target: .' + id + ' ' + target;
  if (node.childElementCount == 0)
{
  let rootspan = document.createElement('span');
  rootspan.setAttribute('portal', portalAttribute);
  //@ts-ignore
  rootspan.innerText = node.innerText;
  //@ts-ignore
  node.innerText  = '';
  node.appendChild(rootspan);
  return true;
}
if (node.childElementCount == 1)
{
  if (node.firstElementChild)
  {
    node.firstElementChild.setAttribute('portal', portalAttribute)
  }
}

if (node.childElementCount > 1)
{
  let rootspan = document.createElement('span');
  rootspan.setAttribute('portal', portalAttribute);
  if (node.parentNode)
  {

    let nodeCount = node.childElementCount;
    for ( let i = nodeCount - 1 ; i >= 0 ; i--)
    {
      //console.log(node.children[i]);
      rootspan.insertBefore(node.children[i], rootspan.firstChild);
      //node.removeChild(node.children[i]);
    }
    node.parentNode.appendChild(rootspan);
}
}
return true;
}

function camelToKebab(str) {
  // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
  //@ts-ignore
  return str.replace(/([a-zA-Z])([A-Z][a-z])/g, (match, before, after) => {
      return `${before.toLowerCase()}-${after.toLowerCase()}`;
  }).toLowerCase();
}




function addProperties(aureliaClass: any, reactprops: any) {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      bindable({
        name: renderPropName,
        attribute: camelToKebab(renderPropName),
        changeHandler: 'render',
        defaultBindingMode: bindingMode.twoWay
      })(aureliaClass);
    }
  }
  
  
