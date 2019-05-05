export class toggle
{
    public checked:boolean = false;

    onChange( args:any[])
    {
        let checked: boolean = args[0];
        console.log("onChange");
        console.log(checked); 
        this.checked = checked; 
    };

}