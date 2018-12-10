export class textfield
{

    getErrorMessage(args:any[])
    {
        let value = args[0];
        return value.length < 3 ? '' : `The length of the input value should less than 3, actual is ${value.length}.`;
    }

    getErrorMessagePromise(args:any[]): Promise<string> 
    {
        return new Promise(resolve => {
        // resolve the promise after 5 seconds.
        //@ts-ignore
            setTimeout(() => resolve(this.parent.getErrorMessage(args)), 5000);
        });
    }
}