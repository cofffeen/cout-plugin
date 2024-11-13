const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.coutPlugin', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, 'std::cout << ');
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};

