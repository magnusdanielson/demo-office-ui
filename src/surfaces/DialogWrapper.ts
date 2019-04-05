import {  Dialog, IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import * as React from 'react';


export class DialogWrapper extends React.Component
{

  inneridReact:number;
  state:IDialogProps;
  aureliaHost:any;

  constructor(props:any)
  {
    super(props);
    console.log("DialogWrapper ctor");
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
    console.log("DialogWrapper componentWillUnmount");
  }

  componentDidMount()
  {
    if( typeof this.aureliaHost.reactComponentDidMount === "function")
    {
      this.aureliaHost.reactComponentDidMount();
    }
    console.log("DialogWrapper componentDidMount");
  }

  render()
  {
    console.log("DialogWrapper render");

    if(this.state.hidden == true)
    {
      return null;
    }    

    let com = React.createElement(Dialog,this.state , 
    React.createElement("span",
    {
      id:this.inneridReact,
      ref:(newParent:HTMLElement)=>
      {
        console.log("DialogWrapper span ref callback");
        if(newParent == null)
        {
          return;
        }

        if(this.state.hidden == true)
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
    console.log("DialogWrapper render complete");
    return com;
  }
}