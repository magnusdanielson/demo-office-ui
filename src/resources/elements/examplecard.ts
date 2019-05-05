import { bindable } from "aurelia-framework";
import {IAuReactWrapper} from '@dunite/au-react-wrapper';

export class examplecard
{
    public showCode:boolean = false;
    @bindable()
    public title:string;

    toggleCode(this:IAuReactWrapper)
    {
        this.parent.showCode = ! this.parent.showCode; 
    }
}