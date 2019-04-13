import { SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/utilities/selectableOption/SelectableOption.types'

export class choicegroup
{

    private testOptions = [
      { key: 'Header', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header },
      { key: 'A', text: 'Arial Black' },
      { key: 'B', text: 'Times New Roman' },
      { key: 'C', text: 'Comic Sans MS' },
      { key: 'divider_2', text: '-', itemType: SelectableOptionMenuItemType.Divider },
      { key: 'Header1', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e' },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j', disabled: true }
    ];

    public onChange(args: any[]){
      console.log("onChange value");
      console.log(args[0]);
      console.log("index");
      console.log(args[1]);
    };


    public onFocus()
    {
      console.log("onfocus log");
    }
    public onBlur()
    {
      console.log("onblur log");
    }
    public menuOpen()
    {
      console.log("menuopen log");
    }
    public dismissed()
    {
      console.log("dismissed log");
    }    
}