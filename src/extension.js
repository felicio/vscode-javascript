'use strict';

var vscode = require('vscode');

var EXTENSION_IDENTIFIER = 'javascript-snippets';

exports.activate = function activate(context) {
  var configuration = vscode.workspace.getConfiguration(EXTENSION_IDENTIFIER);
  var activeConfiguration = Object.assign({}, configuration);

  var disposable = vscode.workspace.onDidChangeConfiguration(function() {
    handleConfigurationChange(activeConfiguration);
  });

  context.subscriptions.push(disposable);
};

function handleConfigurationChange(configuration) {
  var key = 'semicolons';
  var nextConfiguration = vscode.workspace.getConfiguration(
    EXTENSION_IDENTIFIER,
  );

  var inspected = configuration.inspect(key);

  if (configuration.get(key) !== nextConfiguration.get(key)) {
    // TODO: Export src/snippets.js to out/snippets.json
    console.log('semicolons: ' + nextConfiguration.get(key));
    // FIXME: Does not override activeConfiguration variable
    configuration = Object.assign({}, nextConfiguration);
  }
}
