import {DuCallout} from '@dunite/au-office-ui'

export class callout
{
  isCalloutHidden:boolean = true;
  isCalloutHidden2:boolean = true;
  menuButtonElement:Element;
  menuButtonElement2:Element;

  _onShowMenuClicked(this:DuCallout)
  {
    this.parent.isCalloutHidden = !this.parent.isCalloutHidden;
  }
  
  _onShowMenuClicked2(this:DuCallout)
  {
    this.parent.isCalloutHidden2 = !this.parent.isCalloutHidden2;
  }

  _onCalloutDismiss(this:DuCallout)
  {
    console.log("_onCalloutDismiss");
    this.parent.isCalloutHidden = false;
  }

  _onCalloutDismiss2(this:DuCallout)
  {
    console.log("_onCalloutDismiss2");
    this.parent.isCalloutHidden2 = false;
  }

  attached()
  {
    console.log("attached");
    this.menuButtonElement = document.getElementById('menuButtonElement');
    this.menuButtonElement2 = document.getElementById('menuButtonElement2');
  }

  activate()
  {
    console.log("activate");
  }

  getItems = () => {
    return [
      {
        key: 'newItem',
        name: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
          iconName: 'Add'
        },
        ariaLabel: 'New. Use left and right arrow keys to navigate',
        subMenuProps: {
          items: [
            {
              key: 'emailMessage',
              name: 'Email message',
              iconProps: {
                iconName: 'Mail'
              },
              ['data-automation-id']: 'newEmailButton'
            },
            {
              key: 'calendarEvent',
              name: 'Calendar event',
              iconProps: {
                iconName: 'Calendar'
              }
            }
          ]
        }
      },
      {
        key: 'upload',
        name: 'Upload',
        iconProps: {
          iconName: 'Upload'
        },
        href: 'https://dev.office.com/fabric',
        ['data-automation-id']: 'uploadButton'
      },
      {
        key: 'share',
        name: 'Share',
        iconProps: {
          iconName: 'Share'
        },
        onClick: () => console.log('Share')
      },
      {
        key: 'download',
        name: 'Download',
        iconProps: {
          iconName: 'Download'
        },
        onClick: () => console.log('Download')
      }
    ];
  };

  getOverflowItems = () => {
    return [
      {
        key: 'move',
        name: 'Move to...',
        onClick: () => console.log('Move to'),
        iconProps: {
          iconName: 'MoveToFolder'
        }
      },
      {
        key: 'copy',
        name: 'Copy to...',
        onClick: () => console.log('Copy to'),
        iconProps: {
          iconName: 'Copy'
        }
      },
      {
        key: 'rename',
        name: 'Rename...',
        onClick: () => console.log('Rename'),
        iconProps: {
          iconName: 'Edit'
        }
      }
    ];
  };

  getFarItems = () => {
    return [
      {
        key: 'sort',
        name: 'Sort',
        iconProps: {
          iconName: 'SortLines'
        },
        onClick: () => console.log('Sort')
      },
      {
        key: 'tile',
        name: 'Grid view',
        iconProps: {
          iconName: 'Tiles'
        },
        iconOnly: true,
        onClick: () => console.log('Tiles')
      },
      {
        key: 'info',
        name: 'Info',
        iconProps: {
          iconName: 'Info'
        },
        iconOnly: true,
        onClick: () => console.log('Info')
      }
    ];
  };
}
