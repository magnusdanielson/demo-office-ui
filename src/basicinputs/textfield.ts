import { ITextFieldProps } from "office-ui-fabric-react/lib/TextField";
import {DuTextField} from '@dunite/au-office-ui'

export class textfield
{

    name:string;
    
    onchange()
    {
        console.log("h");
    }
    getErrorMessage(args:any[])
    {
        let value = args[0];
        return value.length < 3 ? '' : `The length of the input value should less than 3, actual is ${value.length}.`;
    }

    getErrorMessagePromise(this:DuTextField & ITextFieldProps, args:any[]): Promise<string> 
    {
        return new Promise(resolve => {
        // resolve the promise after 5 seconds.
            setTimeout(() => resolve(this.parent.getErrorMessage(args)), 5000);
        });
    }
}