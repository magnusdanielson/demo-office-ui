export class toggle
{
    public checked:boolean = false;

    onChange( args:any[])
    {
        let checked: boolean = args[0];
        console.log("onChange");
        console.log(checked); 
        //@ts-ignore
        this.parent.checked = checked; };

}