import {  Panel, IPanelProps } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';


export class PanelWrapper extends React.Component
{

  inneridReact:number;
  state:IPanelProps;
  aureliaHost:any;

  constructor(props:any)
  {
    super(props);
    console.log("PanelWrapper ctor");
    // console.log(this);
    // console.log(props);
    this.state = props;
    this.inneridReact = Date.now();
    this.aureliaHost = props.aureliaHost;
  }

  componentWillUnmount()
  {
    if( typeof this.aureliaHost.reactComponentWillUnmount === "function")
    {
      this.aureliaHost.reactComponentWillUnmount();
    }
    console.log("PanelWrapper componentWillUnmount");
  }

  componentDidMount()
  {
    if( typeof this.aureliaHost.reactComponentDidMount === "function")
    {
      this.aureliaHost.reactComponentDidMount();
    }
    console.log("PanelWrapper componentDidMount");
  }

  render()
  {
    console.log("PanelWrapper render");
    console.log(this);

    if(this.state.isOpen == false)
    {
      return null;
    }    

    let com = React.createElement(Panel,this.state , 
    React.createElement("span",
    {
      id:this.inneridReact,
      ref:(newParent:HTMLElement)=>
      {
        console.log("PanelWrapper span ref callback");
        if(newParent == null)
        {
          return;
        }

        if(this.state.isOpen == false)
        {
          return;
        }

        //@ts-ignore
        let auelement = document.getElementById(this.aureliaHost.inneridAurelia);
        //var newParent = document.getElementById(this.inneridReact.toString());

        if(auelement == null)
        {
          return;
        }
        while (auelement.childNodes.length > 0) {
          newParent.appendChild(auelement.childNodes[0]);
        }
      }
    }      
    )
      );
    console.log("PanelWrapper render complete");
    return com;
  }
}