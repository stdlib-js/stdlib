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

var path = require( 'path' );
var globals = require( 'globals' );
var tsParser = require( '@typescript-eslint/parser' );
var tsPlugin = require( '@typescript-eslint/eslint-plugin' );
var stylisticTs = require( '@stylistic/eslint-plugin-ts' );
var pluginN = require( 'eslint-plugin-n' );
var pluginCspell = require( '@cspell/eslint-plugin' );
var pluginJsdoc = require( 'eslint-plugin-jsdoc' );
var pluginImport = require( 'eslint-plugin-import' );
var pluginExpectType = require( 'eslint-plugin-expect-type' );
var assign = require( './lib/node_modules/@stdlib/object/assign' );
var stdlibPlugin = require( './lib/node_modules/@stdlib/_tools/eslint/rules/scripts/plugin.js' );
var restrictedSyntaxConfig = require( './etc/eslint/overrides/restricted_syntax.js' );
var rules = require( './etc/eslint/rules' );
var tsRules = require( './etc/eslint/rules/typescript.js' );


// VARIABLES //

var tsGlobalVars;
var globalVars;
var config;


// MAIN //

globalVars = assign( {}, globals.browser, globals.node );
globalVars = assign( globalVars, globals.commonjs, globals.worker );
tsGlobalVars = assign( {}, globals.browser, globals.node );

config = [
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
			'globals': globalVars
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
	},

	// TypeScript declarations:
	{
		'files': [ '**/*.d.ts' ],
		'languageOptions': {
			'parser': tsParser,
			'sourceType': 'module',
			'parserOptions': {
				'project': path.join( __dirname, 'tsconfig.json' )
			},
			'globals': tsGlobalVars
		},
		'plugins': {
			'@typescript-eslint': tsPlugin,
			'@stylistic/ts': stylisticTs,
			'jsdoc': pluginJsdoc,
			'import': pluginImport,
			'expect-type': pluginExpectType,
			'stdlib': stdlibPlugin
		},
		'rules': tsRules
	},

	// TypeScript test files:
	{
		'files': [ '**/test/**/*.ts' ],
		'rules': {
			'jsdoc/require-jsdoc': 'off'
		}
	}
];


// EXPORTS //

module.exports = config;
