Package.describe({
  name: 'fourquet:dev',
  version: '0.0.2',
  summary: 'DebugOnly umbrella package for Meteor development.',
  git: 'https://github.com/fourquet/meteor-package-dev',
  documentation: 'README.md',
  license: 'LICENSE',
  debugOnly: true,
});

const packages = [
  'ecmascript',
  'constellation:console@1.4.0',
  'fourquet:anti-gravity@1.0.4',
  'babrahams:temple@0.4.1',
  'constellation:tiny@0.4.0',
  'meteorhacks:kadira-profiler@1.2.1',
];

const clientFiles = [
  'helpers.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.use(['templating'], ['client'], {
    weak: true,
  });
  api.addFiles(clientFiles, 'client');
});
