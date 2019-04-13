export class colorpicker
{
    public thecolor:string = "#ffffff";

    colorChanged(args:any[])
    {
        let newValue:string = args[0];
        //@ts-ignore
        this.parent.thecolor = newValue;
    }

    onChange(args:any[])
    {
        console.log(args);
    }
}
