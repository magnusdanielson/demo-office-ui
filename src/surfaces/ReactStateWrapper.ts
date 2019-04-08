import * as React from 'react';

// Den här filen har endast "Panel" som unik referens

export class ReactStateWrapper extends React.Component
{

  inneridReact:number;
  state:any;
  aureliaHost:any;
  reactClass: any

  constructor(props:any)
  {
    super(props);
    console.log("ReactStateWrapper ctor");
    // console.log(this);
    // console.log(props);
    this.state = props;
    this.inneridReact = Date.now();
    this.aureliaHost = props.aureliaHost;
    this.reactClass = props.reactClass;
  }

  componentWillUnmount()
  {
    if( typeof this.aureliaHost.reactComponentWillUnmount === "function")
    {
      this.aureliaHost.reactComponentWillUnmount();
    }
    console.log("ReactStateWrapper componentWillUnmount");
  }

  componentDidMount()
  {
    if( typeof this.aureliaHost.reactComponentDidMount === "function")
    {
      this.aureliaHost.reactComponentDidMount();
    }
    console.log("ReactStateWrapper componentDidMount");
  }

  render()
  {
    console.log("ReactStateWrapper render");
    console.log(this);

    if(this.aureliaHost.isHidden())
    {
      return null;
    }    

    let com = React.createElement(this.reactClass,this.state , 
    React.createElement("span",
    {
      id:this.inneridReact,
      ref:(newParent:HTMLElement)=>
      {
        if(newParent == null)
        {
          return;
        }

        console.log(this.state);
        if(this.aureliaHost.isHidden())
        {
          return;
        }

        let auelement = document.getElementById(this.aureliaHost.inneridAurelia);
        //var newParent = document.getElementById(this.inneridReact.toString());

        if(auelement == null)
        {
          return;
        }
        
        console.log("Move forward");
        while (auelement.childNodes.length > 0) {
          newParent.appendChild(auelement.childNodes[0]);
        }
      }
    }      
    )
      );
    console.log("ReactStateWrapper render complete");
    return com;
  }
}