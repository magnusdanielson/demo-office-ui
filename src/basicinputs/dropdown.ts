import {DropdownMenuItemType, IDropdownProps} from 'office-ui-fabric-react/lib/Dropdown'
import {DuDropdown} from '@dunite/au-office-ui/dist/commonjs/resources/elements/BasicInputs/DuDropdown'
export class dropdown
{
    

  me:any;

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

      public onChange(this:DuDropdown & IDropdownProps, args):void
      {
        console.log("The option has been changed to Object:");
        
        if(args[1].key != 'English')
        {
          this.errorMessage = "An error";
        }
        else
        {
          this.errorMessage = "";
        }
        if(args[1].key != 'Banana')
        {
          this.selectedKey = args[1].key;
        }
        else
        {
          this.selectedKey = "undefined"; // Yes, a string
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