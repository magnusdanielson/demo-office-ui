import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';
import {DialogWrapper} from './DialogWrapper';



export class DuReactWrapperBaseClass 
{
  public element: HTMLElement;
  public container: HTMLElement;
  public reactComponent: any;

  public innerid:number;

  public parent: any;

  public log: Logger;

  constructor(element) 
  {
    
    this.element = element;
    this.log = LogManager.getLogger('DuReactWrapperBaseClass');
    this.log.info("ReactWrapper2 constructor");
  }

  public unbind() {
    console.log("DuReactWrapperBaseClass unbind ")
    ReactDom.unmountComponentAtNode(this.element);
  
  }

  renderReact() 
  {

    this.log.debug('DuReactWrapperBaseClass renderReact');
    ReactDom.unmountComponentAtNode(this.element);

    
    // this is bound to Aurelia class
    this.container = this.element.querySelector('.au-react-root');
  
    if(this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);

    this.innerid = Date.now();
    

    //@ts-ignore
    this.props.innerid = this.innerid;

    //@ts-ignore
    this.props.element = this.element;



    // reactElement is the DOM element;
    //@ts-ignore
    let reactElement = React.createElement(DialogWrapper,this.props);
    
    

    // reactComponent is THE React Component
    var reactComponent = ReactDom.render(reactElement, this.container, ()=>
    {
      console.log("DuReactWrapperBaseClass React callback render complete");
    });
    this.reactComponent = reactComponent;
    
    this.log.debug('DuReactWrapperBaseClass renderReact COMPLETE');
  }
}