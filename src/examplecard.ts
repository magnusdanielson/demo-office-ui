import { bindable } from "aurelia-framework";

export class examplecard
{
    public showCode:boolean = false;
    @bindable()
    public title:string;

    toggleCode()
    {
        //this points to Aurelia host element
        //this.parent point to this class
        //@ts-ignore
        this.parent.showCode = ! this.parent.showCode; 
    }
}