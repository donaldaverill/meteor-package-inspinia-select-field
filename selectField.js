Template.inspiniaSelectField.events({
  'change'(event, template) {
    if (template.data.onChange) {
      template.data.onChange.call(template);
    }
  },
});
Template.inspiniaSelectField.helpers({
  selected(val) {
    return val === Template.instance().data.selected ? 'selected' : null;
  },
});
