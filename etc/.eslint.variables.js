'use strict';

/**
* ESLint rules for variable declarations.
*
* @namespace rules
*/
var rules = {};

/**
* Allow variables to be initialized either during declaration or otherwise.
*
* @name init-declarations
* @memberof rules
* @type {number}
* @default 0
* @see [init-declarations]{@link http://eslint.org/docs/rules/init-declarations}
*/
rules[ 'init-declarations' ] = 0;

/**
* Address IE8 bug in which the `catch` clause can overwrite a variable in the outer scope.
*
* @name no-catch-shadow
* @memberof rules
* @type {number}
* @default 2
* @see [no-catch-shadow]{@link http://eslint.org/docs/rules/no-catch-shadow}
*/
rules[ 'no-catch-shadow' ] = 2;

/**
* Never allow variables to be deleted; only properties.
*
* @name no-delete-var
* @memberof rules
* @type {number}
* @default 2
* @see [no-delete-var]{@link http://eslint.org/docs/rules/no-delete-var}
*/
rules[ 'no-delete-var' ] = 2;

/**
* Never allow a label to share a name with a variable.
*
* @name no-label-var
* @memberof no-label-var
* @type {number}
* @default 2
* @see [no-label-var]{@link http://eslint.org/docs/rules/no-label-var}
*/
rules[ 'no-label-var' ] = 2;

/**
* Never allow reassignment of restricted names.
*
* @name no-shadow-restricted-names
* @memberof rules
* @type {number}
* @default 2
* @see {@link http://eslint.org/docs/rules/no-shadow-restricted-names}
*/
rules[ 'no-shadow-restricted-names' ] = 2;

/**
* Allow shadowing of variable names in a local scope.
*
* @name no-shadow
* @memberof rules
* @type {number}
* @default 0
* @see [no-shadow]{@link http://eslint.org/docs/rules/no-shadow}
*/
rules[ 'no-shadow' ] = 0;

/**
* Never allow a variable to be initialized as `undefined`.
*
* @name no-undef-init
* @memberof rules
* @type {number}
* @default 2
* @see [no-undef-init]{@link http://eslint.org/docs/rules/no-undef-init}
*/
rules[ 'no-undef-init' ] = 2;

/**
* Never allow undeclared variables.
*
* @name no-undef
* @memberof rules
* @type {number}
* @default 2
* @see [no-undef]{@link http://eslint.org/docs/rules/no-undef}
*/
rules[ 'no-undef' ] = 2;

/**
* Never allow the use of `undefined`.
*
* @name no-undefined
* @memberof rules
* @type {number}
* @default 2
* @see [no-undefined]{@link http://eslint.org/docs/rules/no-undefined}
*/
rules[ 'no-undefined' ] = 2;

/**
* Never allow unused variables, except for function arguments preceding a used argument.
*
* @name no-unused-vars
* @memberof rules
* @type {number}
* @see [no-unused-vars]{@link http://eslint.org/docs/rules/no-unused-vars}
*/
rules[ 'no-unused-vars' ] = [ 2, {
	'vars': 'all',
	'args': 'after-used'
}];

/**
* Never allow a variable to be used before being declared (except for function declarations).
*
* @name no-use-before-define
* @memberof rules
* @type {Array}
* @default [ 2, 'nofunc' ]
* @see [no-use-before-define]{@link http://eslint.org/docs/rules/no-use-before-define}
*/
rules[ 'no-use-before-define' ] = [ 2, 'nofunc' ];


// EXPORTS //

module.exports = rules;
