'use strict';

/**
* ESLint rules for enforcing best practices.
*
* @namespace rules
*/
var rules = {};

/**
* Never allow a setter to be defined without a paired getter.
*
* @name accessor-pairs
* @memberof rules
* @type {number}
* @default 2
* @see [accessor-pairs]{@link http://eslint.org/docs/rules/accessor-pairs}
*/
rules[ 'accessor-pairs' ] = 2;

/**
* Never allow variables to be used outside of the block in which they were defined.
*
* @name block-scope-var
* @memberof rules
* @type {number}
* @default 2
* @see [block-scoped-var]{@link http://eslint.org/docs/rules/block-scoped-var}
*/
rules[ 'block-scope-var' ] = 2;

/**
* Disable cyclomatic complexity.
*
* @name complexity
* @memberof rules
* @type {number}
* @default 0
* @see [complexity]{@link http://eslint.org/docs/rules/complexity}
*/
rules[ 'complexity' ] = 0;

/**
* Enforce consistent returns.
*
* @name consistent-return
* @memberof rules
* @type {number}
* @default 2
* @see [consistent-return]{@link http://eslint.org/docs/rules/consistent-return}
*/
rules[ 'consistent-return' ] = 2;

/**
* Always require curly braces.
*
* @name curly
* @memberof rules
* @type {number}
* @default 2
* @see [curly]{@link http://eslint.org/docs/rules/curly}
*/
rules[ 'curly' ] = 2;

/**
* Always require a `default` case in `switch` statements.
*
* @name default-case
* @memberof rules
* @type {number}
* @default 2
* @see [default-case]{@link http://eslint.org/docs/rules/default-case}
*/
rules[ 'default-case' ] = 2;

/**
* Enforce using dot notation over square-bracket notation.
*
* @name dot-notation
* @memberof rules
* @type {number}
* @default 2
* @see [dot-notation]{@link http://eslint.org/docs/rules/dot-notation}
*/
rules[ 'dot-notation' ] = 2;

/**
* Require that a dot be on the same line as a property.
*
* @name dot-location
* @memberof rules
* @type {Array}
* @default [ 2, 'property' ]
* @see [dot-location]{@link http://eslint.org/docs/rules/dot-location}
*/
rules[ 'dot-location' ] = [ 2, 'property' ];

/**
* Always require `===` over `==`.
*
* @name eqeqeq
* @memberof rules
* @type {number}
* @default 2
* @see [eqeqeq]{@link http://eslint.org/docs/rules/eqeqeq}
*/
rules[ 'eqeqeq' ] = 2;

/**
* A `for-in` loop should always filter results using an `if` statement.
*
* @name guard-for-in
* @memberof rules
* @type {number}
* @default 2
* @see [guard-for-in]{@link http://eslint.org/docs/rules/guard-for-in}
*/
rules[ 'guard-for-in' ] = 2;

/**
* Never allow `alert`, `confirm`, or `prompt`.
*
* @name no-alert
* @memberof rules
* @type {number}
* @default 2
* @see [no-alert]{@link http://eslint.org/docs/rules/no-alert}
*/
rules[ 'no-alert' ] = 2;

/**
* Never allow `arguments.caller` or `arguments.callee` to be used, as they are deprecated.
*
* @name no-caller
* @memberof rules
* @type {number}
* @default 2
* @see [no-caller]{@link http://eslint.org/docs/rules/no-caller}
*/
rules[ 'no-caller' ] = 2;

/**
* Always require regex literals to escape division operators.
*
* @name no-div-regex
* @memberof rules
* @type {number}
* @default 2
* @see [no-div-regex]{@link http://eslint.org/docs/rules/no-div-regex}
*/
rules[ 'no-div-regex' ] = 2;

/**
* Prevent unnecessary `else` blocks when an `if` contains a `return` statement.
*
* @name no-else-return
* @memberof rules
* @type {number}
* @default 2
* @see [no-else-return]{@link http://eslint.org/docs/rules/no-else-return}
*/
rules[ 'no-else-return' ] = 2;

/**
* Never allow an empty label.
*
* @name no-empty-label
* @memberof rules
* @type {number}
* @default 2
* @see [no-empty-label]{@link http://eslint.org/docs/rules/no-empty-label}
*/
rules[ 'no-empty-label' ] = 2;

/**
* Never allow `null` comparisons.
*
* @name no-eq-null
* @memberof rules
* @type {number}
* @default 2
* @see [no-eq-null]{@link http://eslint.org/docs/rules/no-eq-null}
*/
rules[ 'no-eq-null' ] = 2;

/**
* Never allow the use of `eval`.
*
* @name no-eval
* @memberof rules
* @type {number}
* @default 2
* @see [no-eval]{@link http://eslint.org/docs/rules/no-eval}
*/
rules[ 'no-eval' ] = 2;

/**
* Never allow extending native prototypes.
*
* @name no-extend-native
* @memberof rules
* @type {number}
* @default 2
* @see [no-extend-native]{@link http://eslint.org/docs/rules/no-extend-native}
*/
rules[ 'no-extend-native' ] = 2;

/**
* Prevent function binding when a function does not use `this`.
*
* @name no-extra-bind
* @memberof rules
* @type {number}
* @default 2
* @see [no-extra-bind]{@link http://eslint.org/docs/rules/no-extra-bind}
*/
rules[ 'no-extra-bind' ] = 2;

/**
* Prevent unintentional fall throughs in `switch` statements.
*
* @name no-fallthrough
* @memberof rules
* @type {number}
* @default 2
* @see [no-fallthrough]{@link http://eslint.org/docs/rules/no-fallthrough}
*/
rules[ 'no-fallthrough' ] = 2;

/**
* Prevent floating decimals; e.g., `2.`.
*
* @name no-floating-decimal
* @memberof rules
* @type {number}
* @default 2
* @see [no-floating-decimal]{@link http://eslint.org/docs/rules/no-floating-decimal}
*/
rules[ 'no-floating-decimal' ] = 2;

/**
* Allow implicit type coercion.
*
* @name no-implicit-coercion
* @memberof rules
* @type {number}
* @default 0
* @see [no-implicit-coercion]{@link http://eslint.org/docs/rules/no-implicit-coercion}
*/
rules[ 'no-implicit-coercion' ] = 0;

/**
* Never allow implied use of `eval` with `setTimeout`, `setInterval`, and `execScript`.
*
* @name no-implied-eval
* @memberof rules
* @type {number}
* @default 2
* @see [no-implied-eval]{@link http://eslint.org/docs/rules/no-implied-eval}
*/
rules[ 'no-implied-eval' ] = 2;

/**
* Never allow the use of `this` outside of classes.

* @name no-invalid-this
* @memberof rules
* @type {number}
* @default 2
* @see [no-invalid-this]{@link http://eslint.org/docs/rules/no-invalid-this}
*/
rules[ 'no-invalid-this' ] = 2;

/**
* Never allow the use of the deprecated `__iterator__` property.
*
* @name no-iterator
* @memberof rules
* @type {number}
* @default 2
* @see [no-iterator]{@link http://eslint.org/docs/rules/no-iterator}
*/
rules[ 'no-iterator' ] = 2;

/**
* Never allow the user of `labels`.
*
* @name no-labels
* @memberof rules
* @type {number}
* @default 2
* @see [no-labels]{@link http://eslint.org/docs/rules/no-labels}
*/
rules[ 'no-labels' ] = 2;

/**
* Never allow standalone code blocks delimited by curly braces.
*
* @name no-lone-blocks
* @memberof rules
* @type {number}
* @default 2
* @see [no-line-blocks]{@link http://eslint.org/docs/rules/no-lone-blocks}
*/
rules[ 'no-lone-blocks' ] = 2;

/**
* Never allow functions to be created within a loop.
*
* @name no-loop-func
* @memberof rules
* @type {number}
* @default 2
* @see [no-loop-func]{@link http://eslint.org/docs/rules/no-loop-func}
*/
rules[ 'no-loop-func' ] = 2;

/**
* Never allow multiple whitespace characters in expressions.
*
* @name no-multi-spaces
* @memberof rules
* @type {number}
* @default 2
* @see [no-multi-spaces]{@link http://eslint.org/docs/rules/no-multi-spaces}
*/
rules[ 'no-multi-spaces' ] = 2;

/**
* Never allow using a `\` character to create multi-line strings.
*
* @name no-multi-str
* @memberof rules
* @type {number}
* @default 2
* @see [no-multi-str]{@link http://eslint.org/docs/rules/no-multi-str}
*/
rules[ 'no-multi-str' ] = 2;

/**
* Never allow built-in native objects to be reassigned.
*
* @name no-native-reassign
* @memberof rules
* @type {number}
* @default 2
* @see [no-native-reassign]{@link http://eslint.org/docs/rules/no-native-reassign}
*/
rules[ 'no-native-reassign' ] = 2;

/**
* Never allow using the `Function` constructor to create functions.
*
* @name no-new-func
* @memberof rules
* @type {number}
* @default 2
* @see [no-new-func]{@link http://eslint.org/docs/rules/no-new-func}
*/
rules[ 'no-new-func' ] = 2;

/**
* Never allow using `String`, `Number`, and `Boolean` in place of primitives.
*
* @name no-new-wrappers
* @memberof rules
* @type {number}
* @default 2
* @see [no-new-wrappers]{@link http://eslint.org/docs/rules/no-new-wrappers}
*/
rules[ 'no-new-wrappers' ] = 2;

/**
* Never allow use the `new` operator without assignment.
*
* @name no-new
* @memberof rules
* @type {number}
* @default 2
* @see [no-new]{@link http://eslint.org/docs/rules/no-new}
*/
rules[ 'no-new' ] = 2;

/**
* Never allow octal escape sequences, which are deprecated.
*
* @name no-octal-escape
* @memberof rules
* @type {number}
* @default 2
* @see [no-octal-escape]{@link http://eslint.org/docs/rules/no-octal-escape}
*/
rules[ 'no-octal-escape' ] = 2;

/**
* Never allow octal literals that begin with a leading zero; e.g., 071 (=> 57).
*
* @name no-octal
* @memberof rules
* @type {number}
* @default 2
* @see [no-octal]{@link http://eslint.org/docs/rules/no-octal}
*/
rules[ 'no-octal' ] = 2;

/**
* Allow parameter reassignment (although bugs can arise when doing so).
*
* @name no-param-reassign
* @memberof rules
* @type {number}
* @default 0
* @see [no-param-reassign]{@link http://eslint.org/docs/rules/no-param-reassign}
*/
rules[ 'no-param-reassign' ] = 0;

/**
* Warn when using `process.env` to prevent it being littered throughout a code base.
*
* @name no-process-env
* @memberof rules
* @type {number}
* @default 0
* @see [no-process-env]{@link http://eslint.org/docs/rules/no-process-env}
*/
rules[ 'no-process-env' ] = 1;

/**
* Never allow using deprecated `__proto__` property.
*
* @name no-proto
* @memberof rules
* @type {number}
* @default 2
* @see [no-proto]{@link http://eslint.org/docs/rules/no-proto}
*/
rules[ 'no-proto' ] = 2;

/**
* Never allow a variable to be declared multiple times within the same scope or for built-in globals to be redeclared.
*
* @name no-redeclare
* @memberof rules
* @type {Array}
* @default [ 2, {'builtinGlobals':true} ]
* @see [no-redeclare]{@link http://eslint.org/docs/rules/no-redeclare}
*/
rules[ 'no-redeclare' ] = [ 2, {
	'builtinGlobals': true
}];

/**
* Never allow assignment in `return` statements.
*
* @name no-return-assign
* @memberof rules
* @type {Array}
* @default [ 2, 'always' ]
* @see [no-return-assign]{@link http://eslint.org/docs/rules/no-return-assign}
*/
rules[ 'no-return-assign' ] = [ 2, 'always' ];

/**
* Never allow using `javascript:` in urls.
*
* @name no-script-url
* @memberof rules
* @type {number}
* @default 2
* @see [no-script-url]{@link http://eslint.org/docs/rules/no-script-url}
*/
rules[ 'no-script-url' ] = 2;

/**
* Allow self-comparison (`NaN` check).
*
* @name no-self-compare
* @memberof rules
* @type {number}
* @default 0
* @see [no-self-compare]{@link http://eslint.org/docs/rules/no-self-compare}
*/
rules[ 'no-self-compare' ] = 0;

/**
* Never allow using a comma operator to separate multiple expressions where only a single expression is expected.
*
* @name no-sequences
* @memberof rules
* @type {number}
* @default 2
* @see [no-sequences]{@link http://eslint.org/docs/rules/no-sequences}
*/
rules[ 'no-sequences' ] = 2;

/**
* Encourage only `Error` objects to be thrown.
*
* @name no-throw-literal
* @memberof rules
* @type {number}
* @default 2
* @see [no-throw-literal]{@link http://eslint.org/docs/rules/no-throw-literal}
*/
rules[ 'no-throw-literal' ] = 2;

/**
* Never allow unused expressions.
*
* @name no-unused-expressions
* @memberof rules
* @type {number}
* @default 2
* @see [no-unused-expressions]{@link http://eslint.org/docs/rules/no-unused-expressions}
*/
rules[ 'no-unused-expressions' ] = 2;

/**
* Never allow using `call` or `apply` when a normal function invocation will suffice.
*
* @name no-useless-call
* @memberof rules
* @type {number}
* @default 2
* @see [no-useless-call]{@link http://eslint.org/docs/rules/no-useless-call}
*/
rules[ 'no-useless-call' ] = 2;

/**
* Never allow concatenation of two string literals which can be combined as a single literal.
*
* @name no-useless-concat
* @memberof rules
* @type {number}
* @default 2
* @see [no-useless-concat]{@link http://eslint.org/docs/rules/no-useless-concat}
*/
rules[ 'no-useless-concat' ] = 2;

/**
* Allow using the `void` operator.
*
* @name no-void
* @memberof rules
* @type {number}
* @default 0
* @see [no-void]{@link http://eslint.org/docs/rules/no-void}
*/
rules[ 'no-void' ] = 0;

/**
* Warn when source contains warning comments.
*
* @name no-warning-comments
* @memberof rules
* @type {Array}
* @see [no-warning-comments]{@link http://eslint.org/docs/rules/no-warning-comments}
*/
rules[ 'no-warning-comments' ] = [ 1, {
	'terms': [
		'todo',
		'warning', // TODO: update terms
		'fixme',
		'hack',
		'xxx'
	],
	'location': 'start'
}];

/**
* Never allow using the `with` statement.
*
* @name no-with
* @memberof rules
* @type {number}
* @default 2
* @see [no-with]{@link http://eslint.org/docs/rules/no-with}
*/
rules[ 'no-with' ] = 2;

/**
* Always require a `radix` parameter to `parseInt()`.
*
* @name radix
* @memberof rules
* @type {number}
* @default 2
* @see [radix]{@link http://eslint.org/docs/rules/radix}
*/
rules[ 'radix' ] = 2;

/**
* Always declare variables at the top of their scope to represent hoisting.
*
* @name vars-on-top
* @memberof rules
* @type {number}
* @default 2
* @see [vars-on-top]{@link http://eslint.org/docs/rules/vars-on-top}
*/
rules[ 'vars-on-top' ] = 2;

/**
* Always require an immediately invoked function expression (IIFE) to be wrapped.
*
* @name wrap-iife
* @memberof rules
* @type {Array}
* @default [ 2, 'inside' ]
* @see [wrap-iife]{@link http://eslint.org/docs/rules/wrap-iife}
*/
rules[ 'wrap-iife' ] = [ 2, 'inside' ];

/**
* Require that literals come after variables in conditions, except for ranges.
*
* @name yoda
* @memberof rules
* @type {Array}
* @default [ 2, 'never', {'exceptRange':true} ]
* @see [yoda]{@link http://eslint.org/docs/rules/yoda}
*/
rules[ 'yoda' ] = [ 2, 'never', {
	'exceptRange': true
}];


// EXPORTS //

module.exports = rules;
