import { PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot'
import {IAuReactWrapper} from '@dunite/au-react-wrapper'

export class pivot
{
    items = [
        { headerText : 'My files', itemKey:'k1' }
        ,{ headerText : 'Recent', itemKey:'k2' }
        ,{ headerText : 'Shared with me', itemKey:'k3' }

    ];

    items2 = [
        { headerText : 'My files', itemKey:'k1', itemCount: 42, itemIcon : "Emoji2" }
        ,{ headerText : 'Recent', itemKey:'k2', itemCount : 23, itemIcon: "Globe" }
        ,{ headerText : 'Shared with me', itemKey:'k3', itemIcon:"Ringer", itemCount:1 }

    ];

    pivotLinkSize = PivotLinkSize.large;

    pivotTabFormat = PivotLinkFormat.tabs;

    public selectedTab = "k1";

    onLinkClick(this:IAuReactWrapper, args: any[]): void 
    {
        console.log(this);
        var item  = args[0];
        this.parent.selectedTab = item.props.itemKey;       
    }
}
