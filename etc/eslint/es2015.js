'use strict';

/**
* ESLint rules for ES2015 features.
*
* @namespace
*/
var rules = {};

/**
* Require parentheses to be used with arrow functions as needed.
*
* @name arrow-parens
* @memberof rules
* @type {Array}
* @default [ 2, 'as-needed' ]
* @see [arrow-parens]{@link http://eslint.org/docs/rules/arrow-parens}
*/
rules[ 'arrow-parens' ] = [ 2, 'as-needed' ];

/**
* Require a space before and after an arrow function's arrow.
*
* @name arrow-spacing
* @memberof rules
* @type {Array}
* @see [arrow-spacing]{@link http://eslint.org/docs/rules/arrow-spacing}
*/
rules[ 'arrow-spacing' ] = [ 2, {
	'before': true,
	'after': true
}];

/**
* Require that constructors of derived classes call `super()`.
*
* @name constructor-super
* @memberof rules
* @type {number}
* @default 2
* @see [constructor-super]{@link http://eslint.org/docs/rules/constructor-super}
*/
rules[ 'constructor-super' ] = 2;

/**
* Require a space between the `function` keyword and the star.
*
* @name generator-star-spacing
* @memberof rules
* @type {Array}
* @see [generator-star-spacing]{@link http://eslint.org/docs/rules/generator-star-spacing}
*/
rules[ 'generator-star-spacing' ] = [ 2, {
	'before': true,
	'after': false
}];

/**
* Never allow a class declaration to be reassigned.
*
* @name no-class-assign
* @memberof rules
* @type {number}
* @default 2
* @see [no-class-assign]{@link http://eslint.org/docs/rules/no-class-assign}
*/
rules[ 'no-class-assign' ] = 2;

/**
* Never allow a variable declared as a constant be reassigned in a non-ES2015 environment.
*
* @name no-const-assign
* @memberof rules
* @type {number}
* @default 2
* @see [no-const-assign]{@link http://eslint.org/docs/rules/no-const-assign}
*/
rules[ 'no-const-assign' ] = 2;

/**
* Never allow duplicate class members.
*
* @name no-dupe-class-members
* @memberof rules
* @type {number}
* @default 2
* @see [no-duple-class-members]{@link http://eslint.org/docs/rules/no-dupe-class-members}
*/
rules[ 'no-dupe-class-members' ] = 2;

/**
* Never allow `this` to be used before `super()` is called.
*
* @name no-this-before-super
* @memberof rules
* @type {number}
* @default 2
* @see [no-this-before-super]{@link http://eslint.org/docs/rules/no-this-before-super}
*/
rules[ 'no-this-before-super' ] = 2;

/**
* Allow the use of `var`.
*
* @name no-var
* @memberof rules
* @type {number}
* @default 0
* @see [no-var]{@link http://eslint.org/docs/rules/no-var}
*/
rules[ 'no-var' ] = 0;

/**
* Do not require object shorthand.
*
* @name object-shortshand
* @memberof rules
* @type {number}
* @default 0
* @see [object-shorthand]{@link http://eslint.org/docs/rules/object-shorthand}
*/
rules[ 'object-shorthand' ] = 0;

/**
* Do not require an arrow callback.
*
* @name prefer-arrow-callback
* @memberof rules
* @type {number}
* @default 0
* @see [prefer-arrow-callback]{@link http://eslint.org/docs/rules/prefer-arrow-callback}
*/
rules[ 'prefer-arrow-callback' ] = 0;

/**
* Prefer a `const` declaration if a `let` variable is not modified.
*
* @name prefer-const
* @memberof rules
* @type {number}
* @default 1
* @see [prefer-const]{@link http://eslint.org/docs/rules/prefer-const}
*/
rules[ 'prefer-const' ] = 1;

/**
* Do not require the spread operator.
*
* @name prefer-spread
* @memberof rules
* @type {number}
* @default 0
* @see [prefer-spread]{@link http://eslint.org/docs/rules/prefer-spread}
*/
rules[ 'prefer-spread' ] = 0;

/**
* Do not require the Reflect API.
*
* @name prefer-reflect
* @memberof rules
* @type {number}
* @default 0
* @see [prefer-reflect]{@link http://eslint.org/docs/rules/prefer-reflect}
*/
rules[ 'prefer-reflect' ] = 0;

/**
* Do not require template literals.
*
* @name prefer-template
* @memberof rules
* @type {number}
* @default 0
* @see [prefer-template]{@link http://eslint.org/docs/rules/prefer-template}
*/
rules[ 'prefer-template' ] = 0;

/**
* Require a `yield` keyword in generator functions.
*
* @name require-yield
* @memberof rules
* @type {number}
* @default 2
* @see [require-yield]{@link http://eslint.org/docs/rules/require-yield}
*/
rules[ 'require-yield' ] = 2;


// EXPORTS //

module.exports = rules;
