var vscode = require('vscode');

var EXTENSION_IDENTIFIER = 'javascript-snippets';

exports.activate = function activate(context) {
  var configuration = vscode.workspace.getConfiguration(EXTENSION_IDENTIFIER);

  var disposable = vscode.workspace.onDidChangeConfiguration(handleConfigurationChange, {
    previousConfiguration: configuration,
  });

  context.subscriptions.push(disposable);
};

function handleConfigurationChange() {
  var configuration = vscode.workspace.getConfiguration(EXTENSION_IDENTIFIER);

  if (
    configuration.get('semicolons') !==
    this.previousConfiguration.get('semicolons')
  ) {
    // TODO: Export snippets as JSON.
    console.log('semicolons: ' + configuration.get('semicolons'));
  }

  return configuration
}
