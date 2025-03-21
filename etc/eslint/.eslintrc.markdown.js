/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

// FIXME: remove the next line and uncomment the subsequent line once all remark JSDoc ESLint rules are completed
var copy = require( './../../lib/node_modules/@stdlib/utils/copy' );

// Var copy = require( './utils/copy.js' );
var defaults = require( './.eslintrc.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Allow variables to be declared as needed.
*
* @private
*/
eslint.rules[ 'vars-on-top' ] = 'off';

/**
* Allow using synchronous methods.
*
* @private
*/
eslint.rules[ 'no-sync' ] = 'off';

/**
* Allow using `console`.
*
* @private
*/
eslint.rules[ 'no-console' ] = 'off';

/**
* Do not require `use strict` pragma.
*
* @private
*/
eslint.rules[ 'strict' ] = 'off';

/**
* Do not require an end-of-line character in code blocks.
*
* @private
*/
eslint.rules[ 'eol-last' ] = 'off';

/**
* Require `4` space indentation.
*
* @private
*/
eslint.rules[ 'indent' ] = [ 'error', 4, {
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
* Never allow tabs.
*
* @private
*/
eslint.rules[ 'no-tabs' ] = 'error';

/**
* Do not require JSDoc comments.
*
* @private
*/
eslint.rules[ 'require-jsdoc' ] = 'off';

/**
* Do not require `@private` annotations.
*
* @private
*/
eslint.rules[ 'stdlib/jsdoc-private-annotation' ] = 'off';

/**
* Do not lint return annotation values in JSDoc comments.
*
* @private
*/
eslint.rules[ 'stdlib/jsdoc-return-annotations-values' ] = 'off'; // FIXME: remove this once we can reliably lint Markdown code blocks

/**
* Allow use of undeclared variables, as variables may be defined in previous code blocks or be implied.
*
* @private
*/
eslint.rules[ 'no-undef' ] = 'off';

/**
* Allow unused variables, as variables may be illustrative or used in subsequent code blocks.
*
* @private
*/
eslint.rules[ 'no-unused-vars' ] = 'off';

/**
* Allow unpublished packages to be required in example code.
*
* @private
*/
eslint.rules[ 'node/no-unpublished-require' ] = 'off';


// EXPORTS //

module.exports = eslint;
