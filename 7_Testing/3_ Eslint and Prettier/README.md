ESLint
Popular linter for JS

Linter: Analyzes static text and marks syndax that breaks rules
Static: anaylze code as written, not when code is run

Linting VS Formatting:
Formatters (like Prettier) automatically format code(indents, sasing)
example:
    spaces around curly braces
    import { useEffect } from 'react';

Linters address format and style:
example:
    expect(checkbox).toHaveAttributte(checked);
    expect(checkbox).toBeChecked());


ESLint Plugins
    Plug-ins extend ESLint
    Testing library and jest-dom ESLint Plugins

https://github.com/testing-library/eslint-plugin-testing-library
https://github.com/testing-library/eslint-plugin-jest-dom
https://github.com/bonnie/bonniedotdev/blob/main/client/.eslintrc.json

* ESLint for Testing Library and Jest-DOM
npm install eslint-plugin-testing-library

-  Delete ESLintConfig from package.json

-  Create a file called .eslintrc.json in the base of the project

{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}

create a folder .vscode

create a file settings.json

{
    "eslint.options": {
        "configFile": ".eslintrc.json"
    },
    "eslint.validate": ["javascript","javascriptreact"],
    "editor.codeActionOnSave": {
        "source.fixAll.eslint": true
    }
}

or :
    "editor.codeActionsOnSave":
    {
    "source.fixAll.eslint": true
    }

