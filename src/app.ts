import {LogManager} from "aurelia-framework";
import { Logger } from "aurelia-logging";
import {Router, RouterConfiguration} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
initializeIcons(/* optional base url */);

export class App {
  public log:Logger;
    public router: Router;
  message = 'Hello World!';

  public groups = [
    {
      links: [
        {
          name: 'About',
          url: '#',
          links: [
            {
              name: 'Gettings started',
              url: '#gettingstarted',
              key: 'gettingstarted'
            },
            {
              name: 'Why',
              url: '#why',
              key: 'why'
            }
          ],
          isExpanded: true
        },
        { name: 'Basic Inputs', key: 'key3',
        links: [
          {
            name: 'Button',
            url: '#buttons',
            key: 'buttons'
          },
          {
            name: 'Checkbox',
            url: '#checkbox',
            key: 'checkbox'
          },
          {
            name: 'Choicegroup',
            url: '#choicegroup',
            key: 'choicegroup'
          }
          ,
          {
            name: 'Combobox',
            url: '#combobox',
            key: 'combobox'
          }
          ,
          {
            name: 'Dropdown',
            url: '#dropdown',
            key: 'dropdown'
          },
          {
            name: 'Label',
            url: '#label',
            key: 'label'
          },
          {
            name: 'Slider',
            url: '#slider',
            key: 'slider'
          },
          {
            name: 'Spinbutton',
            url: '#spinbutton',
            key: 'spinbutton'
          },
          {
            name: 'Textfield',
            url: '#textfield',
            key: 'textfield'
          },
          {
            name: 'Toggle',
            url: '#toggle',
            key: 'toggle'
          }
        ],
        isExpanded: true },
        {
          name: 'Navigation',
          links: [
            {
              name: 'Breadcrumb',
              url: '#breadcrumb',
              key: 'breadcrumb'
            },
            {
              name: 'CommandBar',
              url: '#commandbar',
              key: 'commandbar'
            },
            {
              name: 'Nav',
              url: '#nav',
              key: 'nav'
            },
            {
              name: 'Pivot',
              url: '#pivot',
              key: 'pivot'
            }
            ,
            {
              name: 'Search',
              url: '#search',
              key: 'search'
            }
          ],
          isExpanded: true
        },
        {
          name: 'Pickers',
          links: [
            {
              name: 'ColorPicker',
              url: '#colorpicker',
              key: 'colorpicker'
            },
            {
              name: 'DatePicker',
              url: '#datepicker',
              key: 'datepicker'
            }
          ],
          isExpanded: true
        },
        {
          name: 'Progress & Validation',
          links: [
            {
              name: 'MessageBar',
              url: '#messagebar',
              key: 'messagebar'
            }
          ],
          isExpanded: true
        }
      ]
    }
  ];

  constructor() {
    this.log = LogManager.getLogger('reacthost');
  }

  public configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'au-office-ui';
    config.map([
      { route: ['','/gettingstarted'],  moduleId: PLATFORM.moduleName('./gettingstarted'), name:'gettingstarted', nav: true,   title: 'Getting started' },
      { route: '/buttons',  moduleId: PLATFORM.moduleName('./buttons'), name:'buttons', nav: true,   title: 'Buttons' },
      { route: '/checkbox',  moduleId: PLATFORM.moduleName('./checkbox'), name:'checkbox', nav: true,   title: 'Checkbox' },
      { route: '/choicegroup',  moduleId: PLATFORM.moduleName('./choicegroup'), name:'choicegroup', nav: true,   title: 'ChoiceGroup' },
      { route: '/dropdown',  moduleId: PLATFORM.moduleName('./dropdown'), name:'dropdown', nav: true,   title: 'Dropdown' },
      { route: '/combobox',  moduleId: PLATFORM.moduleName('./combobox'), name:'combobox', nav: true,   title: 'Combobox' },
      { route: '/label',  moduleId: PLATFORM.moduleName('./label'), name:'label', nav: true,   title: 'Label' },
      { route: '/slider',  moduleId: PLATFORM.moduleName('./slider'), name:'slider', nav: true,   title: 'Slider' },
      { route: '/spinbutton',  moduleId: PLATFORM.moduleName('./spinbutton'), name:'spinbutton', nav: true,   title: 'Spinbutton' },
      { route: '/textfield',  moduleId: PLATFORM.moduleName('./textfield'), name:'textfield', nav: true,   title: 'Textfield' },
      { route: '/toggle',  moduleId: PLATFORM.moduleName('./toggle'), name:'toggle', nav: true,   title: 'Toggle' },

      { route: '/breadcrumb',  moduleId: PLATFORM.moduleName('./breadcrumb'), name:'breadcrumb', nav: true,   title: 'Breadcrumb' },
      { route: '/commandbar',  moduleId: PLATFORM.moduleName('./commandbar'), name:'commandbar', nav: true,   title: 'Commandbar' },
      { route: '/nav',  moduleId: PLATFORM.moduleName('./nav'), name:'nav', nav: true,   title: 'Nav' },
      { route: '/pivot',  moduleId: PLATFORM.moduleName('./pivot'), name:'pivot', nav: true,   title: 'Pivot' },
      { route: '/search',  moduleId: PLATFORM.moduleName('./search'), name:'search', nav: true,   title: 'Search' },

      { route: '/colorpicker',  moduleId: PLATFORM.moduleName('./colorpicker'), name:'colorpicker', nav: true,   title: 'Colorpicker' },
      { route: '/datepicker',  moduleId: PLATFORM.moduleName('./datepicker'), name:'datepicker', nav: true,   title: 'Datepicker' },
      { route: '/messagebar',  moduleId: PLATFORM.moduleName('./messagebar'), name:'messagebar', nav: true,   title: 'Messagebar' },

      { route: '/why',  moduleId: PLATFORM.moduleName('./why'), name:'why', nav: true,   title: 'Why' }
      ]);

    this.router = router;
  console.log(router);
  }

}
