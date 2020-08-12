# `au-office-ui`
An Aurelia plugin that wraps React components from Microsoft Office UI.

## How to use
Install with
`au install @dunite/au-office-ui`

It is necessery to calling the .plugin method. All components must also be manually loaded with a call to .globalResources() or by adding a `<require from="@dunite/au-office-ui/elements/Surfaces/DuPanel"></require>` tag to your html view.

```
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@dunite/au-office-ui')) //Add this line
    .feature('resources')
    .globalResources(
      [ // Registrer all components here
        PLATFORM.moduleName('@dunite/au-office-ui/elements/BasicInputs/DuActionButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/elements/BasicInputs/DuCheckbox')
      ]);
    

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
```

Then just use it as below
```
<du-default-button checked="true" text.bind="mytextbutton"  primary class-name="lisa"  on-click.bind="buttonclick"  ></du-default-button>
```

## Demo site
[Examples of most controls in action.](https://magnusdanielson.github.io/au-office-ui/)