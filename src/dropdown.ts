import {DropdownMenuItemType} from 'office-ui-fabric-react/lib/Dropdown'

export class dropdown
{
    

    public simpleOptions:any =
    [
      { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
      { key: 'A', text: 'Option a', title: 'I am option a.' },
      { key: 'B', text: 'Option b' },
      { key: 'C', text: 'Option c', disabled: true },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e' },
      { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
      { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j' }
    ];

      

      public fruits:any = [
        { key: 'Header2', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'Apple', text: 'apple' },
        { key: 'Banana', text: 'banana' },
        { key: 'Orange', text: 'orange', disabled: true },
        { key: 'Grape', text: 'grape', disabled: true },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'Header3', text: 'Lanuages', itemType: DropdownMenuItemType.Header },
        { key: 'English', text: 'english' },
        { key: 'French', text: 'french' },
        { key: 'Germany', text: 'germany' }
      ];

      public selectedItem: undefined;

      public onChange(args):void
      {
        console.log("The option has been changed to Object:");
        console.log(args[0]);
        console.log("Index:");
        console.log(args[1]);

        if(args[0].key != 'English')
        {
          //@ts-ignore
          this.errorMessage = "An error";

        }
        else
        {
          //@ts-ignore
          this.errorMessage = "";

        }
        if(args[0].key != 'Banana')
        {
          //@ts-ignore
          this.parent.selectedItem = args[0].key;
        }
        else
        {
          //@ts-ignore
          this.parent.selectedItem = "undefined"; // Yes, a string
        }

      }

      public onBlur():void
      {
        console.log("The onBlur event");

      }

      public onFocus():void
      {
        console.log("The onFocus event");
      }
}