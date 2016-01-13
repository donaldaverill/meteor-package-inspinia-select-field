# Blaze select input component for the [Inspinia](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) admin theme.
**Note:** [Inspinia Styles](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) must be included separately. See below for [instructions](#how-to-include-styles) on how to include styles.
### Installation
```bash
meteor add fourquet:inspinia-select-field
```
### Example:
```html
<!-- formTemplate.html -->
<template name="formTemplate">
  <form id="someForm">
    {{> inspiniaSelectField
      label='M\'s'
      field='nameList'
      choices=list
      onChange=nameChanged
      selected='edgar-martinez'
    }}
  </form>
</template>
```
```js
// formTemplate.js
Template.formTemplate.helpers({
  nameChanged() {
    return function() {
      var newValue = this.$('select').val();
      console.log('You changed the selection!', newValue);
    };
  },
  list() {
    return [
      {value: null, content: null},
      {value: 'mike-blowers', content: 'Mike Blowers'},
      {value: 'darren-bragg', content: 'Darren Bragg'},
      {value: 'jay-buhner', content: 'Jay Buhner'},
      {value: 'joey-cora', content: 'Joey Cora'},
      {value: 'ken-griffey-jr', content: 'Ken Griffey Jr.'},
      {value: 'felix-fermin', content: 'Félix Fermín'},
      {value: 'randy-johnson', content: 'Randy Johnson'},
      {value: 'edgar-martinez', content: 'Edgar Martinez'},
      {value: 'tino-martinez', content: 'Tino Martinez'},
      {value: 'dan-wilson', content: 'Dan Wilson'},
    ];
  }
});
```
See [full example in the repository](https://github.com/fourquet/meteor-package-inspinia-select-field/tree/master/example).
##### Arguments:
- *field*, String, Required.
  - The name of the field.
- *label*, String, Required unless *skipLabel* is `true`.
  - The label for the input field.
- *skipLabel*, Boolean, Optional.
  - If `true`, the label will not be displayed. Additionally, *label* will not be required.
- *onChange*, Function, Optional.
  - Function to run on change events.
- *choices*, Array of Objects, Required.
  - List of choices for the `select` list in the form of: `[{value: 'value1', content: 'content1'}, {value: 'value2', content: 'content2', etc.}]`
- *success*, Boolean, Optional
  - Displays message below textField but only if the *success* is `false` and *submitted* is `true` and *error* message exists.
- *submitted*, Boolean, Optional
  - If *success* is `true`, an error message may be displayed below the textField.
- *errorMessage*, String, Optional
  - An error message to be displayed if *success* is `false` and *submitted* is `true`.

#### How to include styles
* [Purchase](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) theme at [wrapbootstrap.com](https://wrapbootstrap.com).
* In the app, if the `packages` directory does not exists, create it in the app root: `mkdir packages && cd packages`.
* Create a new Meteor package: `meteor create --package fourquet:inspinia-styles`
* Add the styles to the new package directory like below:

![screen shot 2016-01-13 at 9 22 48 am](https://cloud.githubusercontent.com/assets/5255608/12302061/2acfac3a-b9d8-11e5-8223-2f039527679e.png)

* Edit `package.js` so the `Package.onUse` looks like:

![screen shot 2016-01-13 at 9 36 55 am](https://cloud.githubusercontent.com/assets/5255608/12302280/4c34505a-b9d9-11e5-9064-022900fc92fe.png)

* Add the package to your app: `meteor add fourquet:inspinia-styles`.

#### Version
0.0.1

#### License
MIT
