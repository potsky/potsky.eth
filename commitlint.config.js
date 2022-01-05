module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'cicd',
        'deps',
        'deps-dev',
        'core',
        'pages',
        'contents',
        'plugins',
        'settings',
        'ui',
      ],
    ],
  },
}
