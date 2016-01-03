# Blaze select input component for the [Inspinia](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) admin theme.
**Note:** Must include styles separately.
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

#### Version
0.0.1

#### License
MIT
