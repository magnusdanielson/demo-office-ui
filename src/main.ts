/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
//import * as Bluebird from 'bluebird';
import { CustomElementRegistry } from 'aurelia-web-components';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
//Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    // .standardConfiguration()
    // .feature(PLATFORM.moduleName('resources/index'))
    // .plugin(PLATFORM.moduleName("@dunite/au-office-ui"))
    //.standardConfiguration()
    // .developmentLogging()
    .defaultBindingLanguage()
    .globalResources(
      [ // Registrera alla komponenter som denna webpart använder här
        PLATFORM.moduleName('DuTest'),
        // PLATFORM.moduleName('resources/elements/hljs'),
        // PLATFORM.moduleName('resources/elements/examplecard'),
        // PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Utilities/DuMarqueeSelection'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuActionButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuCheckbox'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuChoiceGroup'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuComboBox'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuCommandBarButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuCompoundButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuContextualMenu'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuDefaultButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuDropdown'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuIconButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuLabel'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuSlider'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuSpinButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuTextField'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuToggle'),

        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Content/DuDetailsList'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Content/DuFacepile'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Content/DuGroupedList'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Content/DuPersona'),

        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Navigation/DuBreadcrumb'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Navigation/DuCommandBar'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Navigation/DuNav'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Navigation/DuPivot'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Navigation/DuSearchBox'),
        
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuColorPicker'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuCompactPeoplePicker'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuDatePicker'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuListPeoplePicker'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuNormalPeoplePicker'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Pickers/DuTagPicker'),
        
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/ProgressValidation/DuMessageBar'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/ProgressValidation/DuProgressIndicator'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/ProgressValidation/DuSpinner'),

        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuCallout'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuCoachmark'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDialog'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDialogFooter'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCard'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCardActions'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCardActivity'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCardLocation'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCardPreview'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuDocumentCardTitle'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuHoverCard'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuTeachingBubble'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuTeachingBubbleContent'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/Surfaces/DuToolTip')

        
    ]);
  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  // aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  // if (environment.testing) {
  //   aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  // }

  return aurelia.start()
  //.then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
  .then(() => {
    const registry = aurelia.container.get(CustomElementRegistry);

    //The following line takes all global resource custom elements and registers them as web components.
    //Once the element is registered, in-page elements will begin rendering.
    registry.useGlobalElements();
  });
}
