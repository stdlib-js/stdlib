/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var defaults = require( './../../eslint.flat.config.js' );


// MAIN //

/**
* ESLint flat configuration for linting Markdown code blocks.
*/
var config = [];

// Include the default configuration:
config = config.concat( defaults );

// Append configuration specific to Markdown code blocks:
config.push({
	'rules': {
		// Allow variables to be declared as needed:
		'vars-on-top': 'off',

		// Allow using synchronous methods:
		'n/no-sync': 'off',

		// Allow using `console`:
		'no-console': 'off',

		// Do not require `use strict` pragma:
		'strict': 'off',

		// Do not require an end-of-line character in code blocks:
		'eol-last': 'off',

		// Require `4` space indentation:
		'indent': [ 'error', 4, {
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
		}],

		// Never allow tabs:
		'no-tabs': 'error',

		// Do not require JSDoc comments:
		'jsdoc/require-jsdoc': 'off',

		// Do not require `@private` annotations:
		'stdlib/jsdoc-private-annotation': 'off',

		// Do not lint return annotation values in JSDoc comments (FIXME: remove this once we can reliably lint Markdown code blocks):
		'stdlib/jsdoc-return-annotations-values': 'off',

		// Do not enforce disallowing empty lines between module-level require statements:
		'stdlib/no-empty-lines-between-requires': 'off',

		// Allow requiring the package as a whole even though only a single property is used:
		'stdlib/no-single-property-require': 'off',

		// Allow use of undeclared variables, as variables may be defined in previous code blocks or be implied:
		'no-undef': 'off',

		// Allow unused variables, as variables may be illustrative or used in subsequent code blocks:
		'no-unused-vars': 'off',

		// Allow unpublished packages to be required in example code:
		'n/no-unpublished-require': 'off'
	}
});


// EXPORTS //

module.exports = config;
