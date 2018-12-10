export class toggle
{
    public checked:boolean = false;

    onChange( checked: boolean)
    { 
        //@ts-ignore
        this['checked'] = checked; };

}