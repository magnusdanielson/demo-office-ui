import { Selection, IColumn } from "office-ui-fabric-react/lib/DetailsList";

export class detailslist {
  private _selection: Selection = new Selection({
    onSelectionChanged: () => {
      //@ts-ignore
      this.setState({ selectionDetails: this._getSelectionDetails() });
    }
  });
  private _allItems: any[];
  private _columns: IColumn[];

  constructor() {
    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 200; i++) {
      this._allItems.push({
        key: i,
        name: "Item " + i,
        value: i
      });
    }

    this._columns = [
      {
        key: "column1",
        name: "Name",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: "column2",
        name: "Value",
        fieldName: "value",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      }
    ];
  }

  private onItemInvoked = (item: any): void => {
    alert(`Item invoked: ${item[0].name}`);
  };

  private selectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " + (this._selection.getSelection()[0] as any).name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }
}
