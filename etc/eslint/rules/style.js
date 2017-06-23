'use strict';

/**
* ESLint rules which enforce style.
*
* @namespace rules
*/
var rules = {};

/**
* Warn when not having spaces within array brackets. NOTE: disabled as difficult to enforce a general rule. Prefer spaces within array brackets, but allow discretion in balancing readability, clarity, and aesthetics.
*
* @name array-bracket-spacing
* @memberof rules
* @type {Array}
* @see [array-bracket-spacing]{@link http://eslint.org/docs/rules/array-bracket-spacing}
*
* @example
* // Bad...
* var arr = [5];
*
* @example
* // Good...
* var arr = [ 5 ];
*
* @example
* // Okay...
* var arr = [ [ 1 ], [ 2 ] ];
*
* @example
* // Okay...
* var arr = [[ 1 ], [ 2 ]];
*
* @example
* // Okay...
* var arr = [ [1], [2] ];
*/
rules[ 'array-bracket-spacing' ] = [ 'off', 'always', {
	'singleValue': true,
	'objectsInArrays': false,
	'arraysInArrays': false
}];

/**
* Always require spaces in single-line blocks.
*
* @name block-spacing
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [block-spacing]{@link http://eslint.org/docs/rules/block-spacing}
*
* @example
* // Bad...
* if ( x === 5 ) {return x;}
*
* @example
* // Good...
* if ( x === 5 ) { return x; }
*/
rules[ 'block-spacing' ] = [ 'error', 'always' ];

/**
* Prefer "one true brace style", but allow consideration of readability and aesthetics.
*
* @name brace-style
* @memberof rules
* @type {Array}
* @see [brace-style]{@link http://eslint.org/docs/rules/brace-style}
*
* @example
* // Bad...
* if ( x !== x )
* {
*     return NaN;
* }
*
* @example
* // Bad...
* if ( x !== x ) { return NaN; }
*
* @example
* // Good...
* if ( x < 10.0 ) {
*     y = foo( x );
* } else {
*     y = bar( x );
* }
*
* @example
* // Okay...
* if ( x < 10.0 ) {
*     y = foo( x );
* }
* // Mid-range approximation...
* else if ( x < 20.0 ) {
*     y = bar( x );
* }
* // Large approximation...
* else {
*     y = beep( x );
* }
*/
rules[ 'brace-style' ] = [ 'off', '1tbs', {
	'allowSingleLine': false
}];

/**
* Require camelcased variable names, but relax the restriction for property names.
*
* @name camelcase
* @memberof rules
* @type {Array}
* @default [ 'error', {'properties':'never'} ]
* @see [camelcase]{@link http://eslint.org/docs/rules/camelcase}
*
* @example
* // Bad...
* var beep_boop = true;
*
* @example
* // Good...
* var beepBoop = true;
*
* @example
* // Okay...
* var obj = {
*     'beep_boop': true
* };
*/
rules[ 'camelcase' ] = [ 'error', {
	'properties': 'never'
}];

/**
* Require that the first letter of a comment be capitalized, but relax this restriction for inline comments.
*
* @name capitalized-comments
* @memberof rules
* @type {Array}
* @see [capitalized-comments]{@link http://eslint.org/docs/rules/capitalized-comments}
*
* @example
* // Good...
*
* @example
* // bad...
*/
rules[ 'capitalized-comments' ] = [ 'warn', 'always', {
	'ignoreInlineComments': true
}];

/**
* Never allow trailing commas.
*
* @name comma-dangle
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [comma-dangle]{@link http://eslint.org/docs/rules/comma-dangle}
*
* @example
* // Bad...
* var obj = {
*     'beep': true,
* };
*
* @example
* // Good...
* var obj = {
*     'beep': true
* }
*/
rules[ 'comma-dangle' ] = [ 'error', 'never' ];

/**
* Require a space after a comma, but never before.
*
* @name comma-spacing
* @memberof rules
* @type {Array}
* @see [comma-spacing]{@link http://eslint.org/docs/rules/comma-spacing}
*
* @example
* // Bad...
* var x = 5,y = 8;
*
* @example
* // Bad...
* var x = 5 ,y = 8;
*
* @example
* // Good...
* var x = 5, y = 8;
*/
rules[ 'comma-spacing' ] = [ 'error', {
	'before': false,
	'after': true
}];

/**
* Require a comma after and on the same line as an array element, object property, or variable declaration.
*
* @name comma-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'last' ]
* @see [comma-style]{@link http://eslint.org/docs/rules/comma-style}
*
* @example
* // Bad...
* var obj = {
*     'beep': true
*   , 'boop': true
* };
*
* @example
* // Good...
* var obj = {
*     'beep': true,
*     'boop': true
* };
*/
rules[ 'comma-style' ] = [ 'error', 'last' ];

/**
* Prefer using whitespace within computed properties. NOTE: disabled, as hard to enforce a general rule. While whitespace is preferred, readability and clarity is preferred to a greater extent.
*
* @name computed-property-spacing
* @memberof rules
* @type {Array}
* @default [ 'off', 'always' ]
* @see [computed-property-spacing]{@link http://eslint.org/docs/rules/computed-property-spacing}
*
* @example
* // Bad...
* var x = obj[prop];
*
* @example
* // Okay...
* var i = 1;
* var x = (1+y[i]) * 10;
*
* @example
* // Good...
* var x = obj[ prop ];
*/
rules[ 'computed-property-spacing' ] = [ 'off', 'always' ];

/**
* Require a `this` variable to only be aliased as `self`.
*
* @name consistent-this
* @memberof rules
* @type {Array}
* @default [ 'error', 'self' ]
* @see [consistent-this]{@link http://eslint.org/docs/rules/consistent-this}
*
* @example
* // Bad...
* var that = this;
*
* @example
* // Good...
* var self = this;
*/
rules[ 'consistent-this' ] = [ 'error', 'self' ];

/**
* Always require an end-of-line character at the end of non-empty files, thus allowing for appending to and concatenating files.
*
* @name eol-last
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [eol-last]{@link http://eslint.org/docs/rules/eol-last}
*/
rules[ 'eol-last' ] = [ 'error', 'always' ];

/**
* Never allow a space between function identifiers and their invocations.
*
* @name func-call-spacing
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [func-call-spacing]{@link http://eslint.org/docs/rules/func-call-spacing}
*
* @example
* // Bad...
* foo ();
*
* @example
* // Good...
* foo();
*/
rules[ 'func-call-spacing' ] = [ 'error', 'never' ];

/**
* Do not require that a variable name match a function name or property.
*
* @name func-name-matching
* @memberof rules
* @type {string}
* @default 'off'
* @see [func-name-matching]{@link http://eslint.org/docs/rules/func-name-matching}
*
* @example
* // Okay...
* var f = obj.foo;
*/
rules[ 'func-name-matching' ] = 'off';

/**
* Always require that functions have a name to aid debugging.
*
* @name func-names
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [func-names]{@link http://eslint.org/docs/rules/func-names}
*
* @example
* // Bad...
* var foo = function() {
*     // Do something...
* };
*
* @example
* // Good...
* var foo = function foo() {
*     // Do something...
* };
*
* @example
* // Better...
* function foo() {
*     // Do something...
* }
*/
rules[ 'func-names' ] = [ 'error', 'always' ];

/**
* Always require function declarations and never allow function expressions or arrow functions.
*
* @name func-style
* @memberof rules
* @type {Array}
* @see [func-style]{@link http://eslint.org/docs/rules/func-style}
*
* @example
* // Bad...
* var foo = function() {
*     // Do something...
* };
*
* @example
* // Good...
* function foo() {
*     // Do something...
* }
*/
rules[ 'func-style' ] = [ 'error', 'declaration', {
	'allowArrowFunctions': false
}];

/**
* Do not blacklist any identifiers.
*
* @name id-blacklist
* @memberof rules
* @type {string}
* @default 'off'
* @see [id-blacklist]{@link http://eslint.org/docs/rules/id-blacklist}
*/
rules[ 'id-blacklist' ] = 'off';

/**
* Warn if the length of an identifier name exceeds `25` characters.
*
* @name id-length
* @memberof rules
* @type {Array}
* @see [id-length]{@link http://eslint.org/docs/rules/id-length}
*/
rules[ 'id-length' ] = [ 'warn', {
	'min': 1,
	'max': 25,
	'properties': 'never'
}];

/**
* Do not impose draconian name restrictions.
*
* @name id-match
* @memberof id-match
* @type {string}
* @default 'off'
* @see [id-match]{@link http://eslint.org/docs/rules/id-match}
*/
rules[ 'id-match' ] = 'off';

/**
* Require tabs, except for `case` statements.
*
* @name indent
* @memberof indent
* @type {Array}
* @see [indent]{@link http://eslint.org/docs/rules/indent}
*/
rules[ 'indent' ] = [ 'error', 'tab', {
	'SwitchCase': 0,
	'VariableDeclarator': 1,
	'outerIIFEBody': 1,
	'MemberExpression': 1,
	'FunctionDeclaration': {
		'body': 1,
		'parameters': 'off'
	},
	'FunctionExpression': {
		'body': 1,
		'parameters': 'off'
	},
	'CallExpression': {
		'arguments': 'off'
	},
	'ArrayExpression': 1,
	'ObjectExpression': 1,
	'flatTernaryExpressions': true
}];

/**
* Disable rule for JSX quotes.
*
* @name jsx-quotes
* @memberof rules
* @type {string}
* @see [jsx-quotes]{@link http://eslint.org/docs/rules/jsx-quotes}
*/
rules[ 'jsx-quotes' ] = 'off';

/**
* Require a space after, but not before, the colon separating an object property from a corresponding value.
*
* @name key-spacing
* @memberof rules
* @type {Array}
* @see [key-spacing]{@link http://eslint.org/docs/rules/key-spacing}
*
* @example
* // Bad...
* var obj = {
*     'beep' : 'boop'
* };
*
* @example
* // Good...
* var obj = {
*     'beep': 'boop'
* };
*/
rules[ 'key-spacing' ] = [ 'error', {
	'beforeColon': false,
	'afterColon': true,
	'mode': 'strict'
}];

/**
* Require spaces around keywords.
*
* @name keyword-spacing
* @memberof rules
* @type {Array}
* @see [keyword-spacing]{@link http://eslint.org/docs/rules/keyword-spacing}
*
* @example
* // Bad...
* if( x < 10 ){
*     y = foo( x );
* }else{
*     y = bar( x );
}
*
* @example
* // Good...
* if ( x!== x ) {
*     y = foo( x );
* } else {
*     y = bar( x );
* }
*/
rules[ 'keyword-spacing' ] = [ 'error', {
	'before': true,
	'after': true
}];

/**
* Allow comments either above or beside code.
*
* @name line-comment-position
* @memberof rules
* @type {string}
* @default 'off'
* @see [line-comment-position]{@link http://eslint.org/docs/rules/line-comment-position}
*/
rules[ 'line-comment-position' ] = 'off';

/**
* Enforce Unix-style line breaks.
*
* @name linebreak-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'unix' ]
* @see [linebreak-style]{@link http://eslint.org/docs/rules/linebreak-style}
*/
rules[ 'linebreak-style' ] = [ 'error', 'unix' ];

/**
* Prefer empty lines before comments. NOTE: disable to allow some discretion in terms of readability, clarity, and terseness.
*
* @name lines-around-comment
* @memberof rules
* @type {Array}
* @see [lines-around-comment]{@link http://eslint.org/docs/rules/lines-around-comment}
*
* @example
* // Bad...
* var x = 5;
* // Line comment:
* var y = 10;
*
* @example
* // Good...
* var x = 5;
*
* // Line comment:
* var y = 10;
*/
rules[ 'lines-around-comment' ] = [ 'off', {
	'beforeBlockComment': true,
	'afterBlockComment': false,
	'beforeLineComment': true,
	'afterLineComment': false,
	'allowBlockStart': true,
	'allowBlockEnd': true,
	'allowObjectStart': true,
	'allowObjectEnd': true,
	'allowArrayStart': true,
	'allowArrayEnd': true
}];

/**
* Always require a blank newline after a directive.
*
* @name lines-around-directive
* @memberof rules
* @type {Array}
* @see [lines-around-directive]{@link http://eslint.org/docs/rules/lines-around-directive}
*
* @example
* // Bad...
* "use strict";
* var x = 5;
*
* @example
* // Good...
* "use strict";
*
* var x = 5;
*/
rules[ 'lines-around-directive' ] = [ 'error', {
	'before': 'never',
	'after': 'always'
}];

/**
* Enforce a maximum depth that blocks can be nested.
*
* @name max-depth
* @memberof rules
* @type {Array}
* @default [ 'error', {'max': 5} ]
* @see [max-depth]{@link http://eslint.org/docs/rules/max-depth}
*/
rules[ 'max-depth' ] = [ 'error', {
	'max': 5
}];

/**
* Do not allow a line to exceed a maximum line length.
*
* @name max-len
* @memberof rules
* @type {Array}
* @see [max-len]{@link http://eslint.org/docs/rules/max-len}
*/
rules[ 'max-len' ] = [ 'error', {
	'code': 80,
	'tabWidth': 4,
	'ignoreComments': true,
	'ignoreUrls': true,
	'ignoreStrings': true,
	'ignoreTemplateLiterals': true,
	'ignoreRegExpLiterals': true
}];

/**
* Limit the number of source code lines in a file.
*
* @name max-lines
* @memberof rules
* @type {Array}
* @see [max-lines]{@link http://eslint.org/docs/rules/max-lines}
*/
rules[ 'max-lines' ] = [ 'warn', {
	'max': 300,
	'skipBlankLines': true,
	'skipComments': true
}];

/**
* Limit the number of nested callbacks.
*
* @name max-nested-callbacks
* @memberof rules
* @type {Array}
* @default [ 'error', {'max': 3} ]
* @see [max-nested-callbacks]{@link http://eslint.org/docs/rules/max-nested-callbacks}
*/
rules[ 'max-nested-callbacks' ] = [ 'error', {
	'max': 3
}];

/**
* Never allow more than `10` parameters.
*
* @name max-params
* @memberof rules
* @type {Array}
* @default [ 'error', {'max': 10} ]
* @see [max-params]{@link http://eslint.org/docs/rules/max-params}
*/
rules[ 'max-params' ] = [ 'error', {
	'max': 10
}];

/**
* Require only `1` statement per line.
*
* @name max-statements-per-line
* @memberof rules
* @type {Array}
* @default [ 'error', {'max': 1} ]
* @see [max-statements-per-line]{@link http://eslint.org/docs/rules/max-statements-per-line}
*/
rules[ 'max-statements-per-line' ] = [ 'error', {
	'max': 1
}];

/**
* Warn when a function has more than `100` statements.
*
* @name max-statements
* @memberof rules
* @type {Array}
* @default [ 'warn', {'max': 100} ]
* @see [max-statements]{@link http://eslint.org/docs/rules/max-statements}
*/
rules[ 'max-statements' ] = [ 'warn', {
	'max': 100
}];

/**
* Allow same line or multiline ternary expressions.
*
* @name multiline-ternary
* @memberof rules
* @type {string}
* @default 'off'
* @see [multiline-ternary]{@link http://eslint.org/docs/rules/multiline-ternary}
*/
rules[ 'multiline-ternary' ] = 'off';

/**
* Require all uppercase-started functions (and properties) be called with the `new` operator.
*
* @name new-cap
* @memberof rules
* @type {Array}
* @see [new-cap]{@link http://eslint.org/docs/rules/new-cap}
*/
rules[ 'new-cap' ] = [ 'error', {
	'newIsCap': false,
	'capIsNew': true,
	'properties': true
}];

/**
* Require parentheses when invoking a function using the `new` operator.
*
* @name new-parens
* @memberof rules
* @type {string}
* @default 'error'
* @see [new-parens]{@link http://eslint.org/docs/rules/new-parens}
*
* @example
* // Bad...
* var arr = new Array;
*
* @example
* // Good...
* var arr = new Array();
*/
rules[ 'new-parens' ] = 'error';

/**
* Allow a newline after variable declarations.
*
* @name newline-after-var
* @memberof rules
* @type {string}
* @default 'off'
* @see [newline-after-var]{@link http://eslint.org/docs/rules/newline-after-var}
*
* @example
* // Okay...
* var x = 5;
*
* if ( x < 10 ) {
*     // Do something...
* }
*
* @example
* // Okay...
* var x = 5;
* if ( x < 10 ) {
*     // Do something...
* }
*/
rules[ 'newline-after-var' ] = 'off';

/**
* Allow a newline before a `return` statement.
*
* @name newline-before-return
* @memberof rules
* @type {string}
* @default 'off'
* @see [newline-before-return]{@link http://eslint.org/docs/rules/newline-before-return}
*
* @example
* // Okay...
* var x = 5;
* var y = x * 3;
*
* return y;
*
* @example
* // Okay...
* var x = 5;
* var y = x * 3;
* return y;
*/
rules[ 'newline-before-return' ] = 'off';

/**
* Do not enforce newlines within chained calls.
*
* @name newline-per-chained-call
* @memberof rules
* @type {string}
* @default 'off'
* @see [newline-per-chained-call]{@link http://eslint.org/docs/rules/newline-per-chained-call}
*/
rules[ 'newline-per-chained-call' ] = 'off';

/**
* Never allow the use of the `Array` constructor when an array literal can be used.
*
* @name no-array-constructor
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-array-constructor]{@link http://eslint.org/docs/rules/no-array-constructor}
*
* @example
* // Bad...
* var arr = new Array( 1, 2, 3 );
*
* @example
* // Good...
* var arr = [ 1, 2, 3 ];
*
* @example
* // Good...
* var arr = new Array( 10 );
*/
rules[ 'no-array-constructor' ] = 'error';

/**
* Allow the use of bitwise operators.
*
* @name no-bitwise
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-bitwise]{@link http://eslint.org/docs/rules/no-bitwise}
*
* @example
* var isOdd = x & 1;
*/
rules[ 'no-bitwise' ] = 'off';

/**
* Allow the use of the `continue` statement.
*
* @name no-continue
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-continue]{@link http://eslint.org/docs/rules/no-continue}
*
* @example
* // Okay...
* var i;
* for ( i = 0; i < 10; i++ ) {
*     if ( i < 5 ) {
*         continue;
*     }
*     // Do something...
* }
*/
rules[ 'no-continue' ] = 'off';

/**
* Allow inline comments.
*
* @name no-inline-comments
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-inline-comments]{@link http://eslint.org/docs/rules/no-inline-comments}
*/
rules[ 'no-inline-comments' ] = 'off';

/**
* Never allow an `if` statement to be the only statement in an `else` block.
*
* @name no-lonely-if
* @memberof rules
* @type {number}
* @default 'error'
* @see [no-lonely-if]{@link http://eslint.org/docs/rules/no-lonely-if}
*
* @example
* // Bad...
* if ( x < 10 ) {
*     // Do something...
* } else {
*     if ( x < 20 ) {
*         // Do something else...
*     }
* }
*
* @example
* // Good...
* if ( x < 10 ) {
*     // Do something...
* } else if ( x < 20 ) {
*     // Do something else...
* }
*/
rules[ 'no-lonely-if' ] = 'error';

/**
* Never allow mixed operators.
*
* @name no-mixed-operators
* @memberof rules
* @type {Array}
* @see [no-mixed-operators]{@link http://eslint.org/docs/rules/no-mixed-operators}
*
* @example
* // Bad...
* var y = 3 + 5 * 6;
*
* @example
* // Good...
* var y = 3 + (5 * 6);
*/
rules[ 'no-mixed-operators' ] = [ 'error', {
	'allowSamePrecedence': true
}];

/**
* Never allow mixed spaces and tabs.
*
* @name no-mixed-spaces-and-tabs
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-mixed-spaces-and-tabs]{@link http://eslint.org/docs/rules/no-mixed-spaces-and-tabs}
*/
rules[ 'no-mixed-spaces-and-tabs' ] = 'error';

/**
* Allow a maximum of two empty lines.
*
* @name no-multiple-empty-lines
* @memberof rules
* @type {Array}
* @default [ 'error', {'max':2} ]
* @see [no-multiple-empty-lines]{@link http://eslint.org/docs/rules/no-multiple-empty-lines}
*/
rules[ 'no-multiple-empty-lines' ] = [ 'error', {
	'max': 2,
	'maxEOF': 1,
	'maxBOF': 1
}];

/**
* Never allow negated conditions when a non-negated condition is possible.
*
* @name no-negated-condition
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-negated-condition]{@link http://eslint.org/docs/rules/no-negated-condition}
*
* @example
* // Bad...
* if ( !x ) {
*     // Do something 1...
* } else {
*     // Do something 2...
* }
*
* @example
* // Good...
* if ( x ) {
*     // Do something 2...
* } else {
*     // Do something 1...
* }
*/
rules[ 'no-negated-condition' ] = 'error';

/**
* Never allow nested ternary expressions.
*
* @name no-nested-ternary
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-nested-ternary]{@link http://eslint.org/docs/rules/no-nested-ternary}
*
* @example
* // Bad...
* var z = ( x < 5 ) ? ( y < 10 ) ? 3 : 2 : 1;
*
* @example
* // Good...
* if ( x < 5 ) {
*     if ( y < 10 ) {
*         z = 3;
*     } else {
*         z = 2;
*     }
* } else {
*     z = 1;
* }
*/
rules[ 'no-nested-ternary' ] = 'error';

/**
* Never use the `new` operator to create a new Object, when the more concise `{}` syntax suffices.
*
* @name no-new-object
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-object]{@link http://eslint.org/docs/rules/no-new-object}
*
* @example
* // Bad...
* var obj = new Object();
*
* @example
* // Good...
* var obj = {};
*/
rules[ 'no-new-object' ] = 'error';

/**
* Never allow the use of `++` and `--`, except when incrementing during a `for` loop.
*
* @name no-plusplus
* @memberof rules
* @type {Array}
* @default 'error'
* @see [no-plusplus]{@link http://eslint.org/docs/rules/no-plusplus}
*
* @example
* // Bad...
* var i = 0;
* i++;
*
* @example
* // Good...
* var i = 0;
* i += 1;
*
* @example
* // Okay...
* var i = 0;
* for ( i = 0; i < 10; i++ ) {
*     // Do something...
* }
*/
rules[ 'no-plusplus' ] = [ 'error', {
	'allowForLoopAfterthoughts': true
}];

/**
* Restrict syntax.
*
* @name no-restricted-syntax
* @memberof rules
* @type {Array}
* @see [no-restricted-syntax]{@link http://eslint.org/docs/rules/no-restricted-syntax}
*/
rules[ 'no-restricted-syntax' ] = [ 'error',
	'ArrowFunctionExpression',
	'ClassBody',
	'ClassDeclaration',
	'ClassExpression',
	'DebuggerStatement',
	'ExperimentalRestProperty',
	'ExperimentalSpreadProperty',
	'FunctionExpression',
	'LabeledStatement',
	'RestElement',
	'SpreadElement',
	'TaggedTemplateExpression',
	'TemplateElement',
	'TemplateLiteral',
	'WithStatement',
	'YieldExpression',
	'JSXIdentifier',
	'JSXNamespacedName',
	'JSXMemberExpression',
	'JSXEmptyExpression',
	'JSXExpressionContainer',
	'JSXElement',
	'JSXClosingElement',
	'JSXOpeningElement',
	'JSXAttribute',
	'JSXSpreadAttribute',
	'JSXText',
	'ExportDefaultDeclaration',
	'ExportNamedDeclaration',
	'ExportAllDeclaration',
	'ExportSpecifier',
	'ImportDeclaration',
	'ImportSpecifier',
	'ImportDefaultSpecifier',
	'ImportNamespaceSpecifier'
];

/**
* Allow tabs.
*
* @name no-tabs
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-tabs]{@link http://eslint.org/docs/rules/no-tabs}
*/
rules[ 'no-tabs' ] = 'off';

/**
* Allow ternary operators.
*
* @name no-ternary
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-ternary]{@link http://eslint.org/docs/rules/no-ternary}
*/
rules[ 'no-ternary' ] = 'off';

/**
* Never allow trailing spaces.
*
* @name no-trailing-spaces
* @memberof rules
* @type {Array}
* @default [ 'error', {'skipBlankLines': false} ]
* @see [no-trailing-spaces]{@link http://eslint.org/docs/rules/no-trailing-spaces}
*/
rules[ 'no-trailing-spaces' ] = [ 'error', {
	'skipBlankLines': false
}];

/**
* Allow dangling underscores to indicate private members, but not for regular variables.
*
* @name no-underscore-dangle
* @memberof rules
* @type {Array}
* @see [no-underscore-dangle]{@link http://eslint.org/docs/rules/no-underscore-dangle}
*/
rules[ 'no-underscore-dangle' ] = [ 'error', {
	'allowAfterThis': true,
	'allowAfterSuper': true
}];

/**
* Never allow unneeded ternary condition expressions.
*
* @name no-unneeded-ternary
* @memberof rules
* @type {Array}
* @default [ 'error', {'defaultAssignment': false} ]
* @see [no-unneeded-ternary]{@link http://eslint.org/docs/rules/no-unneeded-ternary}
*
* @example
* // Bad...
* var bool = ( x === y ) ? true : false;
*
* @example
* // Good...
* var bool = ( x === y );
*/
rules[ 'no-unneeded-ternary' ] = [ 'error', {
	'defaultAssignment': false
}];

/**
* Never allow whitespace before a property.
*
* @name no-whitespace-before-property
* @member rules
* @type {string}
* @default 'error'
* @see [no-whitespace-before-property]{@link http://eslint.org/docs/rules/no-whitespace-before-property}
*
* @example
* // Bad...
* var x = obj. x;
*
* @example
* // Good...
* var x = obj.x;
*/
rules[ 'no-whitespace-before-property' ] = 'error';

/**
* Require consistent line breaks inside braces.
*
* @name object-curly-newline
* @memberof rules
* @type {Array}
* @see [object-curly-newline]{@link http://eslint.org/docs/rules/object-curly-newline}
*
* @example
* // Bad...
* var obj = {
* };
*
* @example
* // Bad...
* var obj = { 'foo': 'bar' };
*
* @example
* // Okay...
* var obj = {
*     'foo': 'bar'
* };
*/
rules[ 'object-curly-newline' ] = [ 'error', {
	'ObjectExpression': {
		'minProperties': 1
	},
	'ObjectPattern': 'never'
}];

/**
* Warn when not including spaces between curly braces.
*
* @name object-curly-spacing
* @memberof rules
* @type {Array}
* @see [object-curly-spacing]{@link http://eslint.org/docs/rules/object-curly-spacing}
*
* @example
* // Bad...
* var obj = {'foo': 'bar'};
*
* @example
* // Okay...
* var obj = { 'foo': 'bar' };
*
* @example
* // Okay...
* var arr = [{ 'foo': 'bar' }];
*
* @example
* // Okay...
* var obj = { 'foo': [ 1, 2 ]};
*/
rules[ 'object-curly-spacing' ] = [ 'warn', 'always', {
	'objectsInObjects': false,
	'arraysInObjects': false
}];

/**
* Require newlines between each object property.
*
* @name object-property-newline
* memberof rules
* @type {Array}
* @see [object-property-newline]{@link http://eslint.org/docs/rules/object-property-newline}
*
* @example
* // Bad...
* var obj = {
*     'foo': 'bar', 'beep': 'boop'
* };
*
* @example
* // Bad...
* var obj = {
*     'foo': 'bar',
*     'beep': 'boop'
* };
*/
rules[ 'object-property-newline' ] = [ 'error', {
	'allowMultiplePropertiesPerLine': false
}];

/**
* Do not require newlines around variable declarations.
*
* @name one-var-declaration-per-line
* @memberof rules
* @type {string}
* @default 'off'
* @see [one-var-declaration-per-line]{@link http://eslint.org/docs/rules/one-var-declaration-per-line}
*
* @example
* // Bad...
* var x,
*     y;
*
* @example
* // Okay...
* var x, y;
*
* @example
* // Good...
* var x;
* var y;
*/
rules[ 'one-var-declaration-per-line' ] = 'off';

/**
* Require multiple variable declarations per function or block.
*
* @name one-var
* @memberof rules
* @type {Array}
* @see [one-var]{@link http://eslint.org/docs/rules/one-var}
*
* @example
* // Bad...
* var x, y;
*
* @example
* // Good...
* var x;
* var y;
*/
rules[ 'one-var' ] = [ 'error', {
	'var': 'never',
	'let': 'never',
	'const': 'never'
}];

/**
* Prefer operator shorthand.
*
* @name operator-assignment
* @memberof rules
* @type {Array}
* @default [ 'warn', 'always' ]
* @see [operator-assignment]{@link http://eslint.org/docs/rules/operator-assignment}
*
* @example
* // Bad...
* var x;
* x = x + 1;
*
* @example
* // Good...
* var x;
* x += 1;
*/
rules[ 'operator-assignment' ] = [ 'warn', 'always' ];

/**
* Require that operators be placed on the end of the line.
*
* @name operator-linebreak
* @memberof rules
* @type {Array}
* @default [ 'error', 'after' ]
* @see [operator-linebreak]{@link http://eslint.org/docs/rules/operator-linebreak}
*
* @example
* // Bad...
* if (
*     x < 10
*     || x > 20
* ) {
*     // Do something...
* }
*
* @example
* // Good...
* if (
*     x < 10 ||
*     x > 20
* ) {
*     // Do something...
* }
*/
rules[ 'operator-linebreak' ] = [ 'error', 'after' ];

/**
* Never allow padded blocks.
*
* @name padded-blocks
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [padded-blocks]{@link http://eslint.org/docs/rules/padded-blocks}
*
* @example
* // Bad...
* if ( x < 10 ) {
*
*     // Do something...
*
* }
*
* @example
* // Good...
* if ( x < 10 ) {
*     // Do something...
* }
*/
rules[ 'padded-blocks' ] = [ 'error', 'never' ];

/**
* Always quote object literal property names.
*
* @name quote-props
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [quote-props]{@link http://eslint.org/docs/rules/quote-props}
*
* @example
* // Bad...
* var obj = {
*     foo: 'bar'
* };
*
* @example
* // Good...
* var obj = {
*     'foo': 'bar'
* };
*/
rules[ 'quote-props' ] = [ 'error', 'always' ];

/**
* Always use single quotes, except in the rare situation when needing to avoid escape.
*
* @name quotes
* @memberof rules
* @type {Array}
* @default [ 'error', 'single' { 'avoidEscape': true }]
* @see [quotes]{@link http://eslint.org/docs/rules/quotes}
*
* @example
* // Bad...
* var obj = {
*     "foo": "bar"
* };
*
* @example
* // Good...
* var obj = {
*     'foo': 'bar'
* };
*/
rules[ 'quotes' ] = [ 'error', 'single', {
	'avoidEscape': true
}];

/**
* Require JSDoc comments.
*
* @name require-jsdoc
* @memberof rules
* @type {Array}
* @see [require-jsdoc]{@link http://eslint.org/docs/rules/require-jsdoc}
*/
rules[ 'require-jsdoc' ] = [ 'error', {
	'require': {
		'FunctionDeclaration': true,
		'ClassDeclaration': true,
		'MethodDefinition': true,
		'ArrowFunctionExpression': true
	}
}];

/**
* Require a space after, but not before, a semicolon.
*
* @name semi-spacing
* @memberof rules
* @type {Array}
* @see [semi-spacing]{@link http://eslint.org/docs/rules/semi-spacing}
*
* @example
* // Bad...
* var x = 5;y = 10;
*
* @example
* // Okay...
* var x = 5; y = 10;
*
* @example
* // Good...
* var x = 5;
* var y = 10;
*
* @example
* // Bad...
* for (i = 0;i < 10;i++) {
*     // Do something...
* }
*
* @example
* // Good...
* for ( i = 0; i < 10; i++ ) {
*     // Do something...
* }
*/
rules[ 'semi-spacing' ] = [ 'error', {
	'before': false,
	'after': true
}];

/**
* Always use semicolons.
*
* @name semi
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [semi]{@link http://eslint.org/docs/rules/semi}
*
* @example
* // Bad...
* var x = 5
*
* @example
* // Good...
* var x = 5;
*/
rules[ 'semi' ] = [ 'error', 'always' ];

/**
* Do not require object keys to be sorted.
*
* @name sort-keys
* @memberof rules
* @type {string}
* @default 'off'
* @see [sort-keys]{@link http://eslint.org/docs/rules/sort-keys}
*
* @example
* // Okay...
* var obj = {
*     'a': 1,
*     'c': 3,
*     'b': 2
* };
*/
rules[ 'sort-keys' ] = 'off';

/**
* Do not require variables to be sorted.
*
* @name sort-vars
* @memberof rules
* @type {string}
* @default 'off'
* @see [sort-vars]{@link http://eslint.org/docs/rules/sort-vars}
*
* @example
* // Okay...
* var x = 0;
* var z = 2;
* var y = 1;
*/
rules[ 'sort-vars' ] = 'off';

/**
* Always include a space before blocks.
*
* @name space-before-blocks
* @memberof rules
* @type {Array}
* @see [space-before-blocks]{@link http://eslint.org/docs/rules/space-before-blocks}
*
* @example
* // Bad...
* function noop(){
*     // Do nothing...
* }
*
* @example
* // Good...
* function noop() {
*     // Do nothing...
* }
*/
rules[ 'space-before-blocks' ] = [ 'error', {
	'functions': 'always',
	'keywords': 'always',
	'classes': 'always'
}];

/**
* Never include a space before a named function parenthesis.
*
* @name space-before-function-paren
* @memberof rules
* @type {Array}
* @see [space-before-function-paren]{@link http://eslint.org/docs/rules/space-before-function-paren}
*
* @example
* // Bad...
* function foo () {
*     // Do something...
* }
*
* @example
* // Good...
* function foo() {
*     // Do something...
* }
*/
rules[ 'space-before-function-paren' ] = [ 'error', {
	'anonymous': 'always',
	'named': 'never',
	'asyncArrow': 'always'
}];

/**
* Allow discretion when including space within parentheses.
*
* @name space-in-parens
* @memberof rules
* @type {string}
* @default 'off'
* @see [space-in-parens]{@link http://eslint.org/docs/rules/space-in-parens}
*
* @example
* // Good...
* var y = foo( [ 1, 2, 3 ] );
*
* @example
* // Okay...
* var arr = new Float64Array([ 1, 2, 3 ]);
*/
rules[ 'space-in-parens' ] = 'off';

/**
* Allow discretion when inserting space around infix operators.
*
* @name space-infix-ops
* @memberof rules
* @type {string}
* @default 'off'
* @see [space-infix-ops]{@link http://eslint.org/docs/rules/space-infix-ops}
*
* @example
* // Good...
* var x = 5 + 3;
*
* @example
* // Okay...
* var x = (5+3) * (10-2);
*/
rules[ 'space-infix-ops' ] = 'off';

/**
* Always include a space after unary word operators, and never include a space after unary operators.
*
* @name space-unary-ops
* @memberof rules
* @type {Array}
* @see [space-unary-ops]{@link http://eslint.org/docs/rules/space-unary-ops}
*
* @example
* // Bad...
* delete(obj.a)
*
* @example
* // Good...
* delete obj.a
*
* @example
* // Bad...
* var x = '5';
* var y = + x;
*
* @example
* // Good...
* var x = '5';
* var y = +x;
*/
rules[ 'space-unary-ops' ] = [ 'error', {
	'words': true,
	'nonwords': false
}];

/**
* Always include a space after starting a comment.
*
* @name spaced-comment
* @memberof rules
* @type {Array}
* @see [spaced-comment]{@link http://eslint.org/docs/rules/spaced-comment}
*
* @example
* //Bad...
*
* @example
* // Good...
*/
rules[ 'spaced-comment' ] = [ 'error', 'always', {
	'block': {
		'balanced': true
	}
}];

/**
* Do not require a Unicode byte order mark (BOM), as we assume UTF-8.
*
* @name unicode-bom
* @memberof rules
* @type {string}
* @default 'off'
* @see [unicode-bom]{@link http://eslint.org/docs/rules/unicode-bom}
*/
rules[ 'unicode-bom' ] = 'off';

/**
* Do not require a regular expression literal to be wrapped in parentheses.
*
* @name wrap-regex
* @memberof rules
* @type {string}
* @default 'off'
* @see [wrap-regex]{@link http://eslint.org/docs/rules/wrap-regex}
*
* @example
* // Okay...
* var bool = /b[eo]+p/.test( 'beep' );
*/
rules[ 'wrap-regex' ] = 'off';


// EXPORTS //

module.exports = rules;
