'use strict';

/**
* ESLint rules which enforce style.
*
* @namespace rules
*/
var rules = {};

/**
* Specifies the use of spacing within `[]`.
*
* @name array-bracket-spacing
* @memberof rules
* @type {Array}
* @see [array-bracket-spacing]{@link http://eslint.org/docs/rules/array-bracket-spacing}
*/
rules[ 'array-bracket-spacing' ] = [ 2, 'always', {
	'singleValue': true,
	'objectsInArrays': false,
	'arraysInArrays': false
}];

/**
* Specifies the use of spacing within single-line blocks.
*
* @name block-spacing
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [block-spacing]{@link http://eslint.org/docs/rules/block-spacing}
*/
rules[ 'block-spacing' ] = [ 2, 'always' ];

/**
* Specifies a curly brace style.
*
* @name brace-style
* @memberof rules
* @type {Array}
* @see [brace-style]{@link http://eslint.org/docs/rules/brace-style}
*/
rules[ 'brace-style' ] = [ 1, '1tbs', {
	'allowSingleLine': false
}];

/**
* Require camelcased variable names, but relax the restriction for property names.
*
* @name camelcase
* @memberof rules
* @type {Array}
* @default [ 2, {'properties':'never'} ]
* @see [camelcase]{@link http://eslint.org/docs/rules/camelcase}
*/
rules[ 'camelcase' ] = [ 2, {
	'properties': 'never'
}];

/**
* Specify the use of spacing around commas.
*
* @name comma-spacing
* @memberof rules
* @type {Array}
* @see [comma-spacing]{@link http://eslint.org/docs/rules/comma-spacing}
*/
rules[ 'comma-spacing' ] = [ 2, {
	'before': false,
	'after': true
}];

/**
* Specify a comma style.
*
* @name comma-style
* @memberof rules
* @type {Array}
* @default [ 2, 'last' ]
* @see [comma-style]{@link http://eslint.org/docs/rules/comma-style}
*/
rules[ 'comma-style' ] = [ 2, 'last' ];

/**
* Specify the use of whitespace within computed properties.
*
* @name computed-property-spacing
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [computed-property-spacing]{@link http://eslint.org/docs/rules/computed-property-spacing}
*/
rules[ 'computed-property-spacing' ] = [ 2, 'always' ];

/**
* Require a `this` variable to only be aliased as `self`.
*
* @name consistent-this
* @memberof rules
* @type {Array}
* @default [ 2, 'self' ]
* @see [consistent-this]{@link http://eslint.org/docs/rules/consistent-this}
*/
rules[ 'consistent-this' ] = [ 2, 'self' ];

/**
* Always require an end-of-line character at the end of non-empty files, thus allowing for appending to and concatenating files.
*
* @name eol-last
* @memberof rules
* @type {number}
* @default 2
* @see [eol-last]{@link http://eslint.org/docs/rules/eol-last}
*/
rules[ 'eol-last' ] = 2;

/**
* Always require that functions have a name to aid debugging.
*
* @name func-names
* @memberof rules
* @type {number}
* @default 2
* @see [func-names]{@link http://eslint.org/docs/rules/func-names}
*/
rules[ 'func-names' ] = 2;

/**
* Always require function declarations and never allow function expressions.
*
* @name func-style
* @memberof rules
* @type {Array}
* @default [ 2, 'declaration' ]
* @see [func-style]{@link http://eslint.org/docs/rules/func-style}
*/
rules[ 'func-style' ] = [ 2, 'declaration' ];

/**
* Limit the maximum length an identifier name may be.
*
* @name id-length
* @memberof rules
* @type {Array}
* @default [ 1, {'max':15} ]
* @see [id-length]{@link http://eslint.org/docs/rules/id-length}
*/
rules[ 'id-length' ] = [ 1, {
	'max': 15
}];

/**
* Do not impose draconian name restrictions.
*
* @name id-match
* @memberof id-match
* @type {number}
* @default 0
* @see [id-match]{@link http://eslint.org/docs/rules/id-match}
*/
rules[ 'id-match' ] = 0;

/**
* Require tabs, except for `case` statements.
*
* @name indent
* @memberof indent
* @type {Array}
* @see [indent]{@link http://eslint.org/docs/rules/indent}
*/
rules[ 'indent' ] = [ 2, 'tab', {
	'SwitchCase': 0
}];

/**
* Specify the use of whitespace around the ':' in object literal properties.
*
* @name key-spacing
* @memberof rules
* @type {Array}
* @see [key-spacing]{@link http://eslint.org/docs/rules/key-spacing}
*/
rules[ 'key-spacing' ] = [ 2, {
	'beforeColon': false,
	'afterColon': true
}];

/**
* Specify empty lines around comments.
*
* @name lines-around-comment
* @memberof rules
* @type {Array}
* @see [lines-around-comment]{@link http://eslint.org/docs/rules/lines-around-comment}
*/
rules[ 'lines-around-comment' ] = [ 2, {
	'beforeLineComment': true,
	'allowBlockStart': true
}];

/**
* Enforce Unix-style line breaks.
*
* @name linebreak-style
* @memberof rules
* @type {Array}
* @default [ 2, 'unix' ]
* @see [linebreak-style]{@link http://eslint.org/docs/rules/linebreak-style}
*/
rules[ 'linebreak-style' ] = [ 2, 'unix' ];

/**
* Limit the number of nested callbacks.
*
* @name max-nested-callbacks
* @memberof rules
* @type {Array}
* @default [ 2, 3 ]
* @see [max-nested-callbacks]{@link http://eslint.org/docs/rules/max-nested-callbacks}
*/
rules[ 'max-nested-callbacks' ] = [ 2, 3 ];

/**
* Require all uppercase-started functions be called with the `new` operator.
*
* @name new-cap
* @memberof rules
* @type {Array}
* @see [new-cap]{@link http://eslint.org/docs/rules/new-cap}
*/
rules[ 'new-cap' ] = [ 2, {
	'newIsCap': false,
	'capIsNew': true
}];

/**
* Require parentheses when invoking a function using the `new` operator.
*
* @name new-parens
* @memberof rules
* @type {number}
* @default 2
* @see [new-parens]{@link http://eslint.org/docs/rules/new-parens}
*/
rules[ 'new-parens' ] = 2;

/**
* Allow a newline after variable declarations.
*
* @name newline-after-var
* @memberof rules
* @type {number}
* @default 0
* @see [newline-after-var]{@link http://eslint.org/docs/rules/newline-after-var}
*/
rules[ 'newline-after-var' ] = 0;

/**
* Never allow the use of the `Array` constructor when an array literal can be used.
*
* @name no-array-constructor
* @memberof rules
* @type {number}
* @default 0
* @see [no-array-constructor]{@link http://eslint.org/docs/rules/no-array-constructor}
*/
rules[ 'no-array-constructor' ] = 2;

/**
* Allow the use of the `continue` statement.
*
* @name no-continue
* @memberof rules
* @type {number}
* @default 0
* @see [no-continue]{@link http://eslint.org/docs/rules/no-continue}
*/
rules[ 'no-continue' ] = 0;

/**
* Warn when inline comments are found.
*
* @name no-inline-comments
* @memberof rules
* @type {number}
* @default 1
* @see [no-inline-comments]{@link http://eslint.org/docs/rules/no-inline-comments}
*/
rules[ 'no-inline-comments' ] = 1;

/**
* Never allow an `if` statement to be the only statement in an `else` block.
*
* @name no-lonely-if
* @memberof rules
* @type {number}
* @default 2
* @see [no-lonely-if]{@link http://eslint.org/docs/rules/no-lonely-if}
*/
rules[ 'no-lonely-if' ] = 2;

/**
* Never allow mixed spaces and tabs.
*
* @name no-mixed-spaces-and-tabs
* @memberof rules
* @type {number}
* @default 2
* @see [no-mixed-spaces-and-tabs]{@link http://eslint.org/docs/rules/no-mixed-spaces-and-tabs}
*/
rules[ 'no-mixed-spaces-and-tabs' ] = 2;

/**
* Allow a maximum of two empty lines.
*
* @name no-multiple-empty-lines
* @memberof rules
* @type {Array}
* @default [ 2, {'max':2} ]
* @see [no-multiple-empty-lines]{@link http://eslint.org/docs/rules/no-multiple-empty-lines}
*/
rules[ 'no-multiple-empty-lines' ] = [ 2, {
	'max': 2
}];

/**
* Never allowed nested ternary expressions.
*
* @name no-nested-ternary
* @memberof rules
* @type {number}
* @default 2
* @see [no-nested-ternary]{@link http://eslint.org/docs/rules/no-nested-ternary}
*/
rules[ 'no-nested-ternary' ] = 2;

/**
* Never use the `new` operator to create a new Object, when the more concise `{}` syntax suffices.
*
* @name no-new-object
* @memberof rules
* @type {number}
* @default 2
* @see [no-new-object]{@link http://eslint.org/docs/rules/no-new-object}
*/
rules[ 'no-new-object' ] = 2;

/**
* Never allow whitespace between a function identifier and its application.
*
* @name no-spaced-func
* @memberof rules
* @type {number}
* @default 2
* @see [no-spaced-func]{@link http://eslint.org/docs/rules/no-spaced-func}
*/
rules[ 'no-spaced-func' ] = 2;

/**
* Allow the use of ternary operators.
*
* @name no-ternary
* @memberof rules
* @type {number}
* @default 0
* @see [no-ternary]{@link http://eslint.org/docs/rules/no-ternary}
*/
rules[ 'no-ternary' ] = 0;

/**
* Never allow trailing spaces.
*
* @name no-trailing-spaces
* @memberof rules
* @type {number}
* @default 2
* @see [no-trailing-spaces]{@link http://eslint.org/docs/rules/no-trailing-spaces}
*/
rules[ 'no-trailing-spaces' ] = 2;

/**
* Allow dangling underscores to indicate private members.
*
* @name no-underscore-dangle
* @memberof rules
* @type {number}
* @default 0
* @see [no-underscore-dangle]{@link http://eslint.org/docs/rules/no-underscore-dangle}
*/
rules[ 'no-underscore-dangle' ] = 0;

/**
* Never allow unneeded ternary condition expressions.
*
* @name no-unneeded-ternary
* @memberof rules
* @type {number}
* @default 2
* @see [no-unneeded-ternary]{@link http://eslint.org/docs/rules/no-unneeded-ternary}
*/
rules[ 'no-unneeded-ternary' ] = 2;

/**
* Specify the use of whitespace in objects.
*
* @name object-curly-spacing
* @memberof rules
* @type {Array}
* @see [object-curly-spacing]{@link http://eslint.org/docs/rules/object-curly-spacing}
*/
rules[ 'object-curly-spacing' ] = [ 2, 'always', {
	'objectsInObjects': false,
	'arraysInObjects': false
}];

/**
* Prefer one variable declaration per function.
*
* @name one-var
* @memberof rules
* @type {Array}
* @see [one-var]{@link http://eslint.org/docs/rules/one-var}
*/
rules[ 'one-var' ] = [ 1, {
	'var': 'always',
	'let': 'always',
	'const': 'never'
}];

/**
* Prefer operator shorthand.
*
* @name operator-assignment
* @memberof rules
* @type {Array}
* @default [ 1, 'always' ]
* @see [operator-assignment]{@link http://eslint.org/docs/rules/operator-assignment}
*/
rules[ 'operator-assignment' ] = [ 1, 'always' ];

/**
* Require that operators be placed on the end of the line.
*
* @name operator-linebreak
* @memberof rules
* @type {Array}
* @default [ 2, 'after' ]
* @see [operator-linebreak]{@link http://eslint.org/docs/rules/operator-linebreak}.
*/
rules[ 'operator-linebreak' ] = [ 2, 'after' ];

/**
* Never allow padded blocks.
*
* @name padded-blocks
* @memberof rules
* @type {Array}
* @default [ 2, 'never' ]
* @see [padded-blocks]{@link http://eslint.org/docs/rules/padded-blocks}
*/
rules[ 'padded-blocks' ] = [ 2, 'never' ];

/**
* Always quote object literal property names.
*
* @name quote-props
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [quote-props]{@link http://eslint.org/docs/rules/quote-props}
*/
rules[ 'quote-props' ] = [ 2, 'always' ];

/**
* Always use single quotes.
*
* @name quotes
* @memberof rules
* @type {Array}
* @default [ 2, 'single' 'avoid-escape' ]
* @see [quotes]{@link http://eslint.org/docs/rules/quotes}
*/
rules[ 'quotes' ] = [ 2, 'single', 'avoid-escape' ];

/**
* Specify the use of whitespace around semicolons.
*
* @name semi-spacing
* @memberof rules
* @type {Array}
* @see [sem-spacing]{@link http://eslint.org/docs/rules/semi-spacing}
*/
rules[ 'semi-spacing' ] = [ 2, {
	'before': false,
	'after': true
}];

/**
* Always use semicolons.
*
* @name semi
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [semi]{@link http://eslint.org/docs/rules/semi}
*/
rules[ 'semi' ] = [ 2, 'always' ];

/**
* Do not enforce alphabetical order when declaring variables.
*
* @name sort-vars
* @memberof rules
* @type {number}
* @default 0
* @see [sort-vars]{@link http://eslint.org/docs/rules/sort-vars}
*/
rules[ 'sort-vars' ] = 0;

/**
* Always include a space after keywords.
*
* @name space-after-keywords
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [space-after-keywords]{@link http://eslint.org/docs/rules/space-after-keywords}
*/
rules[ 'space-after-keywords' ] = [ 2, 'always' ];

/**
* Always include a space before blocks.
*
* @name space-before-blocks
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [space-before-blocks]{@link http://eslint.org/docs/rules/space-before-blocks}
*/
rules[ 'space-before-blocks' ] = [ 2, 'always' ];

/**
* Never include a space before a function parenthesis.
*
* @name space-before-function-paren
* @memberof rules
* @type {Array}
* @default [ 2, 'never' ]
* @see [space-before-function-paren]{@link http://eslint.org/docs/rules/space-before-function-paren}
*/
rules[ 'space-before-function-paren' ] = [ 2, 'never' ];

/**
* Require the use of whitespace within parenthesis.
*
* @name space-in-parens
* @memberof rules
* @type {Array}
* @see [space-in-parens]{@link http://eslint.org/docs/rules/space-in-parens}
*/
rules[ 'space-in-parens' ] = [ 2, 'always', {
	'exceptions': [
		'{}',
		'[]',
		'empty'
	]
}];

/**
* Always include a space around operators, except for `x|0`.
*
* @name space-infix-ops
* @memberof rules
* @type {Array}
* @default [ 2, {'int32Hint':true} ]
* @see [space-infix-ops]{@link http://eslint.org/docs/rules/space-infix-ops}
*/
rules[ 'space-infix-ops' ] = [ 2, {
	'int32Hint': true
}];

/**
* Always require spaces following `return`, `throw`, `case`.
*
* @name space-return-throw-case
* @memberof rules
* @type {number}
* @default 2
* @see [space-return-throw-case]{@link http://eslint.org/docs/rules/space-return-throw-case}
*/
rules[ 'space-return-throw-case' ] = 2;

/**
* Always include a space after unary word operators and never include a space after unary operators.
*
* @name space-unary-ops
* @memberof rules
* @type {Array}
* @see [space-unary-ops]{@link http://eslint.org/docs/rules/space-unary-ops}
*/
rules[ 'space-unary-ops' ] = [ 2, {
	'words': true,
	'nonwords': false
}];

/**
* Always include a space after starting a comment.
*
* @name spaced-comment
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [spaced-comment]{@link http://eslint.org/docs/rules/spaced-comment}
*/
rules[ 'spaced-comment' ] = [ 2, 'always' ];

/**
* Do not require a regex literal to be wrapped in parentheses.
*
* @name wrap-regex
* @memberof rules
* @type {number}
* @default 0
* @see [wrap-regex]{@link http://eslint.org/docs/rules/wrap-regex}
*/
rules[ 'wrap-regex' ] = 0;


// EXPORTS //

module.exports = rules;
