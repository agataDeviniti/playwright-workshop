module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-restricted-globals': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            { ts: 'never', js: 'never' },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    consistent: true, multiline: true,
                },
                ObjectPattern: {
                    consistent: true, multiline: true,
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true, minProperties: 3,
                },
            },
        ],
        'max-len': [2, { code: 150, tabWidth: 4, ignoreUrls: true, ignoreStrings: true }],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'no-await-in-loop': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-var-requires': 'off',
        'import/no-extraneous-dependencies': 'off',
        'function-call-argument-newline': ['error', 'consistent'],
        'prefer-destructuring': ['error', { object: true, array: false }],
    },
};
