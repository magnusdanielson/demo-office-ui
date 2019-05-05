import {IAuReactWrapper} from '@dunite/au-react-wrapper';

export class hovercard
{
    hidden:boolean = true;

    // expandingCardProps: IExpandingCardProps = {
    //     onRenderCompactCard: this._onRenderCompactCard,
    //     onRenderExpandedCard: this._onRenderExpandedCard,
    //     renderData: item
    //   };

    actionButtonClick(this:IAuReactWrapper)
    {
        this.parent.hidden = ! this.parent.hidden;
    }

}