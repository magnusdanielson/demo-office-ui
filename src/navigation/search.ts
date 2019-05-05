import {DuSearchBox} from '@dunite/au-office-ui/dist/commonjs/resources/elements/Navigation/DuSearchBox'
import { ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
export class search
{
    searchText:string = "example";

    onSearch(args:any[])
    {
        let newValue = args[0];
        console.log(  'onSearch new value = ' +  newValue);
    }

    onSearch2(this:DuSearchBox & ISearchBoxProps, args:any[])
    {
        this.value = args[0];
    }

    onBlur()
    {
        console.log("onBlur");
    }

    onChange(this:DuSearchBox & ISearchBoxProps, args:any[])
    {
        let newValue = args[0];
        console.log( 'onChange new value = ' + newValue);
    }

    onFocus()
    {
        console.log("onfocus");
    }
}
