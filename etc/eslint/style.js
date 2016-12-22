'use strict';

/**
* ESLint rules which enforce style.
*
* @namespace rules
*/
var rules = {};

/**
* Warn when not having spaces within array brackets.
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
rules[ 'array-bracket-spacing' ] = [ 'warn', 'always', {
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
* Warn when not using the "one true brace style".
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
rules[ 'brace-style' ] = [ 'warn', '1tbs', {
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
rules[ 'capitalized-comments' ] = [ 'error', 'always', {
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
* Always use whitespace within computed properties.
*
* @name computed-property-spacing
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [computed-property-spacing]{@link http://eslint.org/docs/rules/computed-property-spacing}
*
* @example
* // Bad...
* var x = obj[prop];
*
* @example
* // Good...
* var x = obj[ prop ];
*/
rules[ 'computed-property-spacing' ] = [ 'error', 'always' ];

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
* Never allow a space between function indentifiers and their invocations.
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
* var foo = function(){};
*
* @example
* // Good...
* var foo = function foo(){};
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
* var foo = function(){};
*
* @example
* // Good...
* function foo(){}
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
		'parameters': 'off',
		'body': 1
	},
	'FunctionExpression': {
		'parameters': 'off',
		'body': 1
	},
	'CallExpression': {
		'arguments': 'off'
	},
	'ArrayExpression': 1,
	'ObjectExpresion': 1
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
* Specify empty lines around comments.
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
rules[ 'lines-around-comment' ] = [ 'error', {
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
	'tab': 4,
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
