import { IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';

export class colorpicker
{
    public thecolor:string = "#ffffff";

    colorChanged(this:IColorPickerProps, args:any[])
    {
        let newValue:string = args[1].str;
        this.color= newValue;
    }
}
