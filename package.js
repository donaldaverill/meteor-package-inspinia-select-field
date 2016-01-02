Package.describe({
  name: 'fourquet:inspinia-select-field',
  version: '0.0.1',
  summary: 'Blaze select input component to use with the Inspinia Bootstrap Admin Theme',
  git: 'https://github.com/fourquet/meteor-package-inspinia-select-field',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'templating',
];

const clientFiles = [
  'selectField.html',
  'selectField.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles(clientFiles, 'client');
});
