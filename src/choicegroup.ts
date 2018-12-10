export class choicegroup
{
    
    onChange( args: any[])
    {
      console.log("Event");
      console.log(args[0]);
      console.log("Value");
      console.log(args[1]);
    }

    public optionsBar:any =[
        {
          key: 'bar',
          imageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png",
          imageAlt: 'Bar chart icon',
          selectedImageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png",
          imageSize: { width: 32, height: 32 },
          text: 'Clustered bar chart' // This text is long to show text wrapping.
        },
        {
          key: 'pie',
          imageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png",
          imageAlt: 'Bar chart icon',
          selectedImageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png",
          imageSize: { width: 32, height: 32 },
          text: 'Pie chart'
        }
      ];

      public optionsIcon:any = [
        {
          key: 'day',
          iconProps: { iconName: 'CalendarDay' },
          text: 'Day'
        },
        {
          key: 'week',
          iconProps: { iconName: 'CalendarWeek' },
          text: 'Week'
        },
        {
          key: 'month',
          iconProps: { iconName: 'Calendar' },
          text: 'Month',
          disabled: true
        }
      ]
}