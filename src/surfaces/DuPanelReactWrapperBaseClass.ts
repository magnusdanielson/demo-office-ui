import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';
import {ReactStateWrapper} from './ReactStateWrapper';
import { inlineView } from 'aurelia-framework';

// Den här filen har endast "ReactStateWrapper" som unik referens
@inlineView('<template><div id.bind="inneridAurelia" show.bind="!hidden"><slot></slot></div></template>')
export class DuReactWrapperBaseClass 
{
  public element: HTMLElement;
  public container: HTMLElement;
  public reactComponent: any;

  public inneridAurelia:string;

  public parent: any;

  public log: Logger;

  hiddenName:string;
  hiddenIsHidden:boolean;

  createState(reactprops:any):any
  {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
    var a = {};
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      if (typeof reactprops[renderPropName] === 'function')
        {
          this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
        //if (renderPropName.startsWith('on')) 
        //{
        //  this.log.debug('on property ' + renderPropName);

        // function is aurelia bound, make sure to call it
        this.log.debug('typeof this[renderPropName] = ' + typeof this[renderPropName] );
        if (typeof this[renderPropName] === 'function') 
        {
          a[renderPropName] = (...newValue: any[]) => 
          {
            this.log.debug('bound function, go aurelia');
            return this[renderPropName]( newValue);
          }
        }
        else
        {

          let funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
          if ( ! funcNames.includes( reactprops[renderPropName].name) )
          {
            a[renderPropName] = (...newValue: any[]) => 
            {
              this.log.debug('run func from reactprops');
              return reactprops[renderPropName](this, newValue);
            }
          }
        }
         
       } else {
        if (typeof this[renderPropName] !== 'undefined') {
        this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
          a[renderPropName] = this[renderPropName];
        }
      }
      }
      return a;
  }

  isHidden():boolean
  {
    return this.hiddenIsHidden ? this[this.hiddenName]  :  ! this[this.hiddenName] ;

  }
  constructor(element) 
  {
    
    this.element = element;
    this.log = LogManager.getLogger('DuPanelReactWrapperBaseClass');
    this.log.info("ReactWrapper2 constructor");
    this.inneridAurelia = Date.now().toString();
  }

  public bind(bindingContext) 
  {
    this.log.debug('DuPanel bind');
    if ( bindingContext !== null)
    {
        this.parent = bindingContext;
    }
  }

  public unbind() 
  {
    this.log.debug("DuPanelReactWrapperBaseClass unbind ")
    ReactDom.unmountComponentAtNode(this.element);
  
  }

  propertyChanged(name, newValue, oldValue)
  {
    this.log.debug("propertyChanged");
    this.log.debug(name);
    this.log.debug(newValue);
    this.log.debug(oldValue);
    let obj = {};
    obj[name]=newValue;
    console.log(obj);

    if(name == this.hiddenName)
    {
      if( this.hiddenIsHidden ? newValue : !newValue )
      {
        this.moveBack();
      }
    }
    this.reactComponent.setState(obj);
    
  }

  moveBack()
  {
    console.log("Move back");
    let auelement = document.getElementById(this.inneridAurelia);

    var oldParent = document.getElementById(this.reactComponent.inneridReact);
        
    if(oldParent == null)
    {
      return;
    }

    while (oldParent.childNodes.length > 0) {
      auelement.appendChild(oldParent.childNodes[0]);
    }
  }
  reactComponentWillUnmount()
  {
    this.log.debug("DuPanelReactWrapperBaseClass componentWillUnmount");
  }

  reactComponentDidMount()
  {
    this.log.debug("DuPanelReactWrapperBaseClass reactComponentDidMount");
  }
  renderReact(reactClass: any,a:any) 
  {

    this.log.debug('DuPanelReactWrapperBaseClass renderReact');
    //@ts-ignore
    //this.props.isOpen = ! this.hidden;

    ReactDom.unmountComponentAtNode(this.element);

    
    this.container = this.element.querySelector('.au-react-root');
  
    if(this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);

    a.aureliaHost = this;
    a.reactClass = reactClass;

    // reactElement is the DOM element;
    let reactElement = React.createElement(ReactStateWrapper,a);
    
    // reactComponent is THE React Component
    var reactComponent = ReactDom.render(reactElement, this.container, ()=>
    {
      this.log.debug("DuPanelReactWrapperBaseClass React callback render complete");
    });
    this.reactComponent = reactComponent;
    
    this.log.debug('DuPanelReactWrapperBaseClass renderReact complete');
  }
}