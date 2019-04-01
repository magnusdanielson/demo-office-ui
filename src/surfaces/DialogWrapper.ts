import {  Dialog, IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import * as React from 'react';


export class DialogWrapper extends React.Component
{

  innerid:number;
  state:IDialogProps;
  element:HTMLElement;

  other:DialogWrapper;

  constructor(props:any)
  {
    super(props);
    console.log("DialogWrapper ctor");
    console.log(this);
    console.log(props);
    this.state = props;// <IDialogProps>{};
    //this.state.hidden = false;
    this.innerid =props.innerid;
    this.element = props.element;
    this.other = this;
  }

  componentWillUnmount()
  {
    console.log("DialogWrapper componentWillUnmount");
  }

  componentDidMount()
  {
    console.log("DialogWrapper componentDidMount");
  }


  public auSetState(obj:any)
  {
      console.log("auSetState");
      console.log(this);
      //@ts-ignore
      this.setState(obj);
  }
  render()
  {
    var that = this;
    console.log("DialogWrapper render");

    if(this.state.hidden == true)
    {
      return null;
    }
    // let a= <IDialogProps>{};
    // a.dialogContentProps = this.state.dialogContentProps;
    // a.hidden = this.state.hidden;
    // a.modalProps = this.state.modalProps;
    // a.onDismiss = this.state.onDismiss;
    
    // a.onDismiss = ()=>
    // {
    //   console.log("DialogWrapper Dialog dismiss")
    //   let auelement = this.element.getElementsByTagName("au-content")[0];
    //   var oldParent = document.getElementById(this.innerid.toString());
        
    //   if(oldParent == null)
    //   {
    //     return;
    //   }

    //   while (oldParent.childNodes.length > 0) {
    //     auelement.appendChild(oldParent.childNodes[0]);
    //   }

    //   //@ts-ignore
    //   //this.element.au.controller.viewModel.mytest();

    //   //@ts-ignore
    //   //that.setState({ hidden: true });

    //   this.state.onDismiss(that);
    // };

    

    let com = React.createElement(Dialog,this.state , 
    React.createElement("span",
    {
      id:this.innerid,
      ref:(what:any)=>
      {
        console.log("DialogWrapper span ref callback");
        if(what == null)
        {
          return;
        }

        console.log(this);
        console.log(what);

        if(this.state.hidden == true)
        {
          return;
        }

        let auelement = this.element.getElementsByTagName("au-content")[0];
        var newParent = document.getElementById(this.innerid.toString());

        if(newParent == null)
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