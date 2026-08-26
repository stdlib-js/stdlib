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

/* eslint-disable n/no-unpublished-require */

'use strict';

// MODULES //

var globals = require( 'globals' );
var pluginN = require( 'eslint-plugin-n' );
var pluginCspell = require( '@cspell/eslint-plugin' );
var pluginJsdoc = require( 'eslint-plugin-jsdoc' );
var assign = require( './../../lib/node_modules/@stdlib/object/assign' );
var stdlibPlugin = require( './../../lib/node_modules/@stdlib/_tools/eslint/rules/scripts/plugin.js' );
var defaults = require( './rules' );


// VARIABLES //

var globalVars;
var config;
var rules;


// MAIN //

globalVars = assign( {}, globals.browser, globals.node );
globalVars = assign( globalVars, globals.commonjs, globals.worker );

/**
* Lint rules for Markdown code blocks.
*
* @private
*/
rules = assign( {}, defaults );

/**
* Allow variables to be declared as needed.
*
* @private
*/
rules[ 'vars-on-top' ] = 'off';

/**
* Allow using synchronous methods.
*
* @private
*/
rules[ 'n/no-sync' ] = 'off';

/**
* Allow using `console`.
*
* @private
*/
rules[ 'no-console' ] = 'off';

/**
* Do not require `use strict` pragma.
*
* @private
*/
rules[ 'strict' ] = 'off';

/**
* Do not require an end-of-line character in code blocks.
*
* @private
*/
rules[ 'eol-last' ] = 'off';

/**
* Require `4` space indentation.
*
* @private
*/
rules[ 'indent' ] = [ 'error', 4, {
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
rules[ 'no-tabs' ] = 'error';

/**
* Do not require JSDoc comments.
*
* @private
*/
rules[ 'jsdoc/require-jsdoc' ] = 'off';

/**
* Do not require `@private` annotations.
*
* @private
*/
rules[ 'stdlib/jsdoc-private-annotation' ] = 'off';

/**
* Do not lint return annotation values in JSDoc comments.
*
* @private
*/
rules[ 'stdlib/jsdoc-return-annotations-values' ] = 'off'; // FIXME: remove this once we can reliably lint Markdown code blocks

/**
* Do not enforce disallowing empty lines between module-level require statements.
*
* @private
*/
rules[ 'stdlib/no-empty-lines-between-requires' ] = 'off';

/**
* Allow requiring the package as a whole even though only a single property is used.
*
* @private
*/
rules[ 'stdlib/no-single-property-require' ] = 'off';

/**
* Allow use of undeclared variables, as variables may be defined in previous code blocks or be implied.
*
* @private
*/
rules[ 'no-undef' ] = 'off';

/**
* Allow unused variables, as variables may be illustrative or used in subsequent code blocks.
*
* @private
*/
rules[ 'no-unused-vars' ] = 'off';

/**
* Allow unpublished packages to be required in example code.
*
* @private
*/
rules[ 'n/no-unpublished-require' ] = 'off';

/**
* ESLint configuration.
*
* @private
*/
config = [
	{
		// Match Markdown files, as code blocks are linted using the path of the containing Markdown file, along with JavaScript files in order to support linting anonymous code strings:
		'files': [ '**/*.md', '**/*.js' ],
		'linterOptions': {
			// Do not flag unused disable directives, as the remark plugin unconditionally injects a `stdlib/require-order` disable directive when prepending the main `require` statement to subsequent code blocks:
			'reportUnusedDisableDirectives': 'off'
		},
		'languageOptions': {
			'ecmaVersion': 6,
			'sourceType': 'script',
			'globals': globalVars
		},
		'plugins': {
			'n': pluginN,
			'jsdoc': pluginJsdoc,
			'@cspell': pluginCspell,
			'stdlib': stdlibPlugin
		},
		'rules': rules
	}
];


// EXPORTS //

module.exports = config;
