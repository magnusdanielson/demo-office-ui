import { ISliderProps } from 'office-ui-fabric-react/lib/Slider';

export class slider
{
    public min = -5;

    sliderValue = 25;
    public onchange(this:ISliderProps, value:any)
    {
        this.value = value[0];
    }
}
