export class search
{
    onSearch(args:any[])
    {
        let newValue = args[0];
        console.log(  'onSearch new value = ' +  newValue);
    }

    onBlur()
    {
        console.log("onBlur");
    }

    onChange(args:any[])
    {
        let newValue = args[0];
        console.log( 'onChange new value = ' + newValue);
    }

    onFocus()
    {
        console.log("onfocus");
    }
}
