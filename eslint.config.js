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
var objectKeys = require( './lib/node_modules/@stdlib/utils/keys' );
var stdlibPlugin = require( './lib/node_modules/@stdlib/_tools/eslint/rules/scripts/plugin.js' );
var rules = require( './etc/eslint/rules' );
var tsRules = require( './etc/eslint/rules/typescript.js' );


// VARIABLES //

/**
* List of rules to exclude when linting JSDoc code snippets because they are incompatible with code fragments extracted from JSDoc comments.
*
* @private
* @type {Array}
*/
var JSDOC_SNIPPET_EXCLUDE = [
	'no-undef',
	'no-unused-vars',
	'strict',
	'no-var',
	'eol-last',
	'indent',
	'no-restricted-syntax'
];


var restrictedSyntaxConfig = [
	'error',
	'ArrowFunctionExpression',
	'ClassBody',
	'ClassDeclaration',
	'ClassExpression',
	'DebuggerStatement',
	'ExperimentalRestProperty',
	'ExperimentalSpreadProperty',
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


var exampleRules = {
	'no-console': 'off',
	'vars-on-top': 'off',
	'jsdoc/require-jsdoc': 'off',
	'stdlib/jsdoc-private-annotation': 'off',
	'stdlib/require-order': 'off',
	'stdlib/require-file-extensions': 'off',
	'no-restricted-syntax': restrictedSyntaxConfig
};
var jsRules;
var config;


// FUNCTIONS //

/**
* Extracts built-in ESLint rules from a configuration object, filtering out plugin rules and rules listed in an exclusion list.
*
* @private
* @param {Object} config - ESLint configuration object
* @param {Array} exclude - rule names to exclude
* @returns {Object} filtered rules object
*/
function extractSnippetRules( config, exclude ) {
	var rules;
	var keys;
	var key;
	var i;

	rules = {};
	keys = objectKeys( config.rules );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];

		// Skip plugin rules (e.g., "stdlib/foo", "node/bar") since the Linter instance does not have them registered:
		if ( key.indexOf( '/' ) !== -1 ) {
			continue;
		}
		// Skip rules explicitly excluded as incompatible with code snippets:
		if ( exclude.indexOf( key ) !== -1 ) {
			continue;
		}
		rules[ key ] = config.rules[ key ];
	}
	return rules;
}



// MAIN //

jsRules = assign( {}, rules );
jsRules[ 'stdlib/jsdoc-example-eslint' ] = [ 'warn', {
	'rules': extractSnippetRules({
		'rules': assign( {}, rules, exampleRules )
	}, JSDOC_SNIPPET_EXCLUDE )
}];

config = [
	// Global ignores:
	{
		'ignores': [
			'**/build/',
			'**/reports/',
			'dist/',
			'.git*',

			// Un-ignore stdlib source (nested `node_modules` directories remain ignored by ESLint's defaults):
			'!lib/node_modules/'
		]
	},

	// Base JavaScript config:
	{
		'files': [ '**/*.js' ],
		'languageOptions': {
			'ecmaVersion': 6,
			'sourceType': 'script',
			'globals': assign( {}, globals.browser, globals.node, globals.commonjs, globals.worker )
		},
		'plugins': {
			'n': pluginN,
			'jsdoc': pluginJsdoc,
			'@cspell': pluginCspell,
			'stdlib': stdlibPlugin
		},
		'rules': jsRules
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
		'rules': exampleRules
	},

	// Tests:
	{
		'files': [ '**/test/**/*.js' ],
		'rules': {
			'no-empty-function': 'off',
			'no-new-wrappers': 'warn',
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
			'stdlib/no-single-property-require': 'off',
			'stdlib/no-unnecessary-nested-functions': 'off',
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
		'files': [ '**/*.d.ts', '**/docs/types/test.ts' ],
		'languageOptions': {
			'parser': tsParser,
			'sourceType': 'module',
			'parserOptions': {
				'project': path.join( __dirname, 'tsconfig.json' )
			},
			'globals': assign( {}, globals.browser, globals.node )
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
		'files': [ '**/docs/types/test.ts' ],
		'rules': {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-use-before-define': 'off',
			'brace-style': 'off',
			'jsdoc/require-jsdoc': 'off',
			'jsdoc/require-param': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/require-throws': 'off'
		}
	}
];


// EXPORTS //

module.exports = config;
