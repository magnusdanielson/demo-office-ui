import {IDuReactWrapper} from '@dunite/au-office-ui/dist/commonjs/resources/wrapper/IDuReactWrapper'

export class hovercard
{
    hidden:boolean = true;

    // expandingCardProps: IExpandingCardProps = {
    //     onRenderCompactCard: this._onRenderCompactCard,
    //     onRenderExpandedCard: this._onRenderExpandedCard,
    //     renderData: item
    //   };

    actionButtonClick(this:IDuReactWrapper)
    {
        this.parent.hidden = ! this.parent.hidden;
    }

}