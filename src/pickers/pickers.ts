import { ITag, IBasePickerProps } from 'office-ui-fabric-react/lib/Pickers';
import {IDuReactWrapper} from '@dunite/au-office-ui/dist/commonjs/resources/wrapper/IDuReactWrapper'


const _testTags: ITag[] = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow'
  ].map(item => ({ key: item, name: item }));
  
export class pickers
{

    public selectedItems: any[] = [];

    public inputProps = {
        onBlur: (ev: any) => console.log('onBlur called'),
        onFocus: (ev: any) => console.log('onFocus called'),
        'aria-label': 'Tag Picker'
      };

    public onFilterChanged(this:IDuReactWrapper, args:any[]): ITag[] 
    {
        let filterText: string = args[0];
        let tagList: ITag[] = args[1];

        let retValue =  filterText
            ? _testTags
                .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
                .filter(tag => !this.parent.listContainsDocument(tag, tagList))
            : [];

        return retValue;
    }

    public onChange(this:IDuReactWrapper & IBasePickerProps<ITag>, args:any[])
    {
        this.selectedItems = args[0];
        console.log(this.parent.selectedItems);
    }

    private listContainsDocument(tag: ITag, tagList?: ITag[]) 
    {
        if (!tagList || !tagList.length || tagList.length === 0) 
        {
            return false;
        }
        return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
    }



    private onItemSelected(args:any[]): ITag | null
    {
        console.log(this);
        let item: ITag = args[0];

        if(item.key == "blue")
        {
            return null;
        }
        return item;
    }
    
}
