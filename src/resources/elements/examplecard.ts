import { bindable } from "aurelia-framework";
import {IDuReactWrapper} from '@dunite/au-office-ui/dist/commonjs/resources/wrapper/IDuReactWrapper'

export class examplecard
{
    public showCode:boolean = false;
    @bindable()
    public title:string;

    toggleCode(this:IDuReactWrapper)
    {
        this.parent.showCode = ! this.parent.showCode; 
    }
}