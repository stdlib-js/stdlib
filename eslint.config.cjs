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

var globals = require( 'globals' );
var pluginN = require( 'eslint-plugin-n' );
var pluginCspell = require( '@cspell/eslint-plugin' );
var pluginJsdoc = require( 'eslint-plugin-jsdoc' );
var stdlibPlugin = require( './lib/node_modules/@stdlib/_tools/eslint/rules/scripts/plugin.js' );
var allRules = require( './etc/eslint/rules' );
var overrides = require( './etc/eslint/overrides' );


// VARIABLES //

var restrictedSyntaxConfig = overrides[ 2 ].rules[ 'no-restricted-syntax' ];
var nonClonableRules = {};
var rules = {};
var val;
var key;
var i;


// FUNCTIONS //

/**
* Tests whether a value can be structured-cloned.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether the value is clonable
*/
function isClonable( value ) {
	try {
		// eslint-disable-next-line n/no-unsupported-features/es-builtins
		if ( typeof structuredClone === 'function' ) {
			structuredClone( value );
		}
		return true;
	} catch ( e ) {
		return false;
	}
}


// MAIN //

// Separate rules containing non-clonable values:
for ( key in allRules ) {
	val = allRules[ key ];
	if ( isClonable( val ) ) {
		rules[ key ] = val;
	} else {
		nonClonableRules[ key ] = val;
	}
}

module.exports = [
	// Global ignores:
	{
		'ignores': [
			'**/build/',
			'**/reports/',
			'dist/',
			'.git*'
		]
	},

	// Base JavaScript config:
	{
		'files': [ '**/*.js' ],
		'languageOptions': {
			'ecmaVersion': 6,
			'sourceType': 'script',
			'globals': {
				...globals.browser,
				...globals.node,
				...globals.commonjs,
				...globals.worker
			}
		},
		'plugins': {
			'n': pluginN,
			'jsdoc': pluginJsdoc,
			'@cspell': pluginCspell,
			'stdlib': stdlibPlugin
		},
		'rules': rules
	},

	// REPL namespace files:
	{
		'files': [ '**/lib/node_modules/@stdlib/**/lib/[a-z].js' ],
		'rules': {
			'stdlib/repl-namespace-order': 'error'
		}
	},

	// Benchmarks:
	{
		'files': [ '**/benchmark/**/*.js' ],
		'rules': {
			'no-new-wrappers': 'warn',
			'max-lines': [ 'warn', {
				'max': 1000,
				'skipBlankLines': true,
				'skipComments': true
			}],
			'jsdoc/require-jsdoc': 'off',
			'no-restricted-syntax': restrictedSyntaxConfig
		}
	},

	// Examples:
	{
		'files': [ '**/examples/**/*.js' ],
		'rules': {
			'no-console': 'off',
			'vars-on-top': 'off',
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/require-order': 'off',
			'stdlib/require-file-extensions': 'off',
			'no-restricted-syntax': restrictedSyntaxConfig
		}
	},

	// Tests:
	{
		'files': [ '**/test/**/*.js' ],
		'rules': {
			'no-empty-function': 'off',
			'jsdoc/require-jsdoc': 'off',
			'no-undefined': 'off',
			'max-lines': [ 'warn', {
				'max': 1000,
				'skipBlankLines': true,
				'skipComments': true
			}],
			'no-restricted-syntax': restrictedSyntaxConfig
		}
	}
];
