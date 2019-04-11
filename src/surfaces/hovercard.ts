export class hovercard
{
    hidden:boolean = true;

    // expandingCardProps: IExpandingCardProps = {
    //     onRenderCompactCard: this._onRenderCompactCard,
    //     onRenderExpandedCard: this._onRenderExpandedCard,
    //     renderData: item
    //   };

    actionButtonClick()
    {
        console.log("sdsd");
        //@ts-ignore
        this.parent.hidden = ! this.parent.hidden;

    }

}