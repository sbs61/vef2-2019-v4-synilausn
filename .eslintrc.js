module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'linebreak-style': 0,
    'object-curly-newline': ['error', {
      'ExportDeclaration': { 'multiline': true, 'minProperties': 4 }
    }],
    // bætt við sýnilausn
    'max-len': ['error', { code: 80, ignoreUrls: true }],
  },
  plugins: ['import'],
};
