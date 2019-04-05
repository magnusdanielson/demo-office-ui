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

  public inneridAurelia:string;

  public parent: any;

  public log: Logger;

  constructor(element) 
  {
    
    this.element = element;
    this.log = LogManager.getLogger('DuReactWrapperBaseClass');
    this.log.info("ReactWrapper2 constructor");
  }

  public unbind() {
    this.log.debug("DuReactWrapperBaseClass unbind ")
    ReactDom.unmountComponentAtNode(this.element);
  
  }

  reactComponentWillUnmount()
  {
    this.log.debug("DuReactWrapperBaseClass componentWillUnmount");
  }

  reactComponentDidMount()
  {
    this.log.debug("DuReactWrapperBaseClass reactComponentDidMount");
  }
  renderReact() 
  {

    this.log.debug('DuReactWrapperBaseClass renderReact');
    //console.log(this.element);
    ReactDom.unmountComponentAtNode(this.element);

    
    this.container = this.element.querySelector('.au-react-root');
  
    if(this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);

    this.inneridAurelia = Date.now().toString();

    //@ts-ignore
    this.props.aureliaHost = this;

    // reactElement is the DOM element;
    //@ts-ignore
    let reactElement = React.createElement(DialogWrapper,this.props);
    
    // reactComponent is THE React Component
    var reactComponent = ReactDom.render(reactElement, this.container, ()=>
    {
      this.log.debug("DuReactWrapperBaseClass React callback render complete");
    });
    this.reactComponent = reactComponent;
    
    this.log.debug('DuReactWrapperBaseClass renderReact complete');
  }
}