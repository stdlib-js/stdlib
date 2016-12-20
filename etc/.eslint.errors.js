'use strict';

/**
* ESLint rules to catch programmer errors.
*
* @namespace rules
*/
var rules = {};

/**
* Never allow dangling commas.
*
* @name comma-dangle
* @memberof rules
* @type {Array}
* @default [ 2, 'never' ]
* @see [comma-dangle]{@link http://eslint.org/docs/rules/comma-dangle}
*/
rules[ 'comma-dangle' ] = [ 2, 'never' ];

/**
* Never allow assignment in a conditional statement.
*
* @name no-cond-assign
* @memberof rules
* @type {number}
* @default 2
* @see [no-cond-assign]{@link http://eslint.org/docs/rules/no-cond-assign}
*/
rules[ 'no-cond-assign' ] = 2;

/**
* Warn when using `console` in Node. Use a logger instead.
*
* @name no-console
* @memberof rules
* @type {number}
* @default 1
* @see [no-console]{@link http://eslint.org/docs/rules/no-console}
*/
rules[ 'no-console' ] = 1;

/**
* Never allow constant expressions in conditions.
*
* @name no-constant-condition
* @memberof rules
* @type {number}
* @default 2
* @see [no-constant-condition]{@link http://eslint.org/docs/rules/no-constant-condition}
*/
rules[ 'no-constant-condition' ] = 2;

/**
* Never allow control characters in regular expressions.
*
* @name no-control-regex
* @memberof rules
* @type {number}
* @default 2
* @see [no-control-regex]{@link http://eslint.org/docs/rules/no-control-regex}
*/
rules[ 'no-control-regex' ] = 2;

/**
* Never allow the `debugger` statement.
*
* @name no-debugger
* @memberof rules
* @type {number}
* @default 2
* @see [no-debugger]{@link http://eslint.org/docs/rules/no-debugger}
*/
rules[ 'no-debugger' ] = 2;

/**
* Never allow duplicate parameter names when not in `strict mode`.
*
* @name no-dupe-args
* @memberof rules
* @type {number}
* @default 2
* @see [no-dupe-args]{@link http://eslint.org/docs/rules/no-dupe-args}
*/
rules[ 'no-dupe-args' ] = 2;

/**
* Never allow duplicate keys in object literals, as doing so can lead to unexpected behavior.
*
* @name no-dupe-keys
* @memberof rules
* @type {number}
* @default 2
* @see [no-dupe-keys]{@link http://eslint.org/docs/rules/no-dupe-keys}
*/
rules[ 'no-dupe-keys' ] = 2;

/**
* Never allow duplicate case labels.
*
* @name no-duplicate-case
* @memberof rules
* @type {number}
* @default 2
* @see [no-duplicate-case]{@link http://eslint.org/docs/rules/no-duplicate-case}
*/
rules[ 'no-duplicate-case' ] = 2;

/**
* Never allow empty character classes in regular expressions.
*
* @name no-empty-character-class
* @memberof rules
* @type {number}
* @default 2
* @see [no-empty-character-class]{@link http://eslint.org/docs/rules/no-empty-character-class}
*/
rules[ 'no-empty-character-class' ] = 2;

/**
* Never allow empty block statements, including when using `try/catch`.
*
* @name no-empty
* @memberof rules
* @type {number}
* @default 2
* @see [no-empty]{@link http://eslint.org/docs/rules/no-empty}
*/
rules[ 'no-empty' ] = 2;

/**
* Never allow reassignment of an exception parameter in a `catch` block.
*
* @name no-ex-assign
* @memberof rules
* @type {number}
* @default 2
* @see [no-ex-assign]{@link http://eslint.org/docs/rules/no-ex-assign}
*/
rules[ 'no-ex-assign' ] = 2;

/**
* Never allow extra boolean casts in an `if` statement.
*
* @name no-extra-boolean-cast
* @memberof rules
* @type {number}
* @default 2
* @see [no-extra-boolean-cast]{@link http://eslint.org/docs/rules/no-extra-boolean-cast}
*/
rules[ 'no-extra-boolean-cast' ] = 2;

/**
* Never allow unnecessary parentheses around function expressions.
*
* @name no-extra-parens
* @memberof rules
* @type {Array}
* @default [ 2, 'functions' ]
* @see [no-extra-parens]{@link http://eslint.org/docs/rules/no-extra-parens}
*/
rules[ 'no-extra-parens' ] = [ 2, 'functions' ];

/**
* Never allow unnecessary extra semicolons.
*
* @name no-extra-semi
* @memberof rules
* @type {number}
* @default 2
* @see [no-extra-semi]{@link http://eslint.org/docs/rules/no-extra-semi}
*/
rules[ 'no-extra-semi' ] = 2;

/**
* Never allow reassignment of a FunctionDeclaration.
*
* @name no-func-assign
* @memberof rules
* @type {number}
* @default 2
* @see [no-func-assign]{@link http://eslint.org/docs/rules/no-func-assign}
*/
rules[ 'no-func-assign' ] = 2;

/**
* Never allow function or variable declarations within inner block scopes.
*
* @name no-inner-declarations
* @memberof rules
* @type {Array}
* @default [ 2, 'both' ]
* @see [no-inner-declarations]{@link http://eslint.org/docs/rules/no-inner-declarations}
*/
rules[ 'no-inner-declarations' ] = [ 2, 'both' ];

/**
* Never allow invalid regular expressions.
*
* @name no-invalid-regexp
* @memberof rules
* @type {number}
* @default 2
* @see [no-invalid-regexp]{@link http://eslint.org/docs/rules/no-invalid-regexp}
*/
rules[ 'no-invalid-regexp' ] = 2;

/**
* Never allow irregular whitespace.
*
* @name no-irregular-whitespace
* @memberof rules
* @type {number}
* @default 2
* @see [no-irregular-whitespace]{@link http://eslint.org/docs/rules/no-irregular-whitespace}
*/
rules[ 'no-irregular-whitespace' ] = 2;

/**
* Never allow a negated left-hand-side argument when using the `in` operator.
*
* @name no-negated-in-lhs
* @memberof rules
* @type {number}
* @default 2
* @see [no-negated-in-lhs]{@link http://eslint.org/docs/rules/no-negated-in-lhs}
*/
rules[ 'no-negated-in-lhs' ] = 2;

/**
* Never allow calling of global objects as functions.
*
* @name no-obj-calls
* @memberof rules
* @type {number}
* @default 2
* @see [no-obj-calls]{@link http://eslint.org/docs/rules/no-obj-calls}
*/
rules[ 'no-obj-calls' ] = 2;

/**
* Never allow multiple consecutive spaces within a regular expression.
*
* @name no-regex-spaces
* @memberof rules
* @type {number}
* @default 2
* @see [no-regex-spaces]{@link http://eslint.org/docs/rules/no-regex-spaces}
*/
rules[ 'no-regex-spaces' ] = 2;

/**
* Never allow a sparse array to be initialized using an array literal and commas.
*
* @name no-sparse-arrays
* @memberof rules
* @type {number}
* @default 2
* @see [no-sparse-arrays]{@link http://eslint.org/docs/rules/no-sparse-arrays}
*/
rules[ 'no-sparse-arrays' ] = 2;

/**
* Never allow the presence of unreachable code.
*
* @name no-unreachable
* @memberof rules
* @type {number}
* @default 2
* @see [no-unreachable]{@link http://eslint.org/docs/rules/no-unreachable}
*/
rules[ 'no-unreachable' ] = 2;

/**
* Never allow direct comparison with `NaN`.
*
* @name use-isnan
* @memberof rules
* @type {number}
* @default 2
* @see [use-isnan]{@link http://eslint.org/docs/rules/use-isnan}
*/
rules[ 'use-isnan' ] = 2;

/**
* Require valid JSDoc.
*
* @name valid-jsdoc
* @memberof rules
* @type {number}
* @default 2
* @see [valid-jsdoc]{@link http://eslint.org/docs/rules/valid-jsdoc}
*/
rules[ 'valid-jsdoc' ] = 2;

/**
* Only allow the result of `typeof` to be compared against a select subset of known strings (e.g., 'string', 'undefined', etc.).
*
* @name valid-typeof
* @memberof rules
* @type {number}
* @default 2
* @see [valid-typeof]{@link http://eslint.org/docs/rules/valid-typeof}
*/
rules[ 'valid-typeof' ] = 2;

/**
* Prevent unexpected multiline statements.
*
* @name no-unexpected-multiline
* @memberof rules
* @type {number}
* @default 2
* @see [no-unexpected-multiline]{@link http://eslint.org/docs/rules/no-unexpected-multiline}
*/
rules[ 'no-unexpected-multiline' ] = 2;


// EXPORTS //

module.exports = rules;
