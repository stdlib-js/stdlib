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
var pluginJsonc = require( 'eslint-plugin-jsonc' );
var jsoncParser = require( 'jsonc-eslint-parser' );
var pluginYml = require( 'eslint-plugin-yml' );
var yamlParser = require( 'yaml-eslint-parser' );
var assign = require( './lib/node_modules/@stdlib/object/assign' );
var stdlibPlugin = require( './lib/node_modules/@stdlib/_tools/eslint/rules/scripts/plugin.js' );
var rules = require( './etc/eslint/rules' );
var tsRules = require( './etc/eslint/rules/typescript.js' );
var jsonRules = require( './etc/eslint/rules/json.js' );
var yamlRules = require( './etc/eslint/rules/yaml.js' );


// VARIABLES //

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
var yamlConfigRules;
var tsGlobalVars;
var globalVars;
var config;


// MAIN //

globalVars = assign( {}, globals.browser, globals.node );
globalVars = assign( globalVars, globals.commonjs, globals.worker );
tsGlobalVars = assign( {}, globals.browser, globals.node );
yamlConfigRules = assign( {}, yamlRules );
yamlConfigRules[ 'stdlib/yaml-license-header' ] = 'error';

config = [
	// Global ignores:
	{
		'ignores': [
			'**/build/',
			'**/reports/',
			'dist/',
			'.git*',
			'!.github/',
			'!.codecov.yml',

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
	},

	// Base JSON:
	{
		'files': [ '**/*.json' ],
		'languageOptions': {
			'parser': jsoncParser
		},
		'plugins': {
			'jsonc': pluginJsonc
		},
		'rules': jsonRules
	},

	// cli_opts.json override (tab-indented per .editorconfig):
	{
		'files': [ '**/cli_opts.json' ],
		'rules': {
			'jsonc/indent': [ 'error', 'tab' ]
		}
	},

	// package.json key ordering:
	{
		'files': [ '**/package.json' ],
		'rules': {
			'jsonc/sort-keys': [ 'error', {
				'pathPattern': '^$',
				'order': [
					'name',
					'private',
					'version',
					'description',
					'license',
					'licenses',
					'author',
					'maintainers',
					'contributors',
					'funding',
					'bin',
					'main',
					'exports',
					'browser',
					'unpkg',
					'gypfile',
					'directories',
					'types',
					'scripts',
					'homepage',
					'repository',
					'repositories',
					'bugs',
					'dependencies',
					'optionalDependencies',
					'devDependencies',
					'engines',
					'os',
					'keywords',
					'__stdlib__'
				]
			}]
		}
	},

	// Base YAML:
	{
		'files': [ '**/*.yml' ],
		'languageOptions': {
			'parser': yamlParser
		},
		'plugins': {
			'yml': pluginYml,
			'stdlib': stdlibPlugin
		},
		'rules': yamlConfigRules
	},

	// GitHub Actions workflow key ordering:
	{
		'files': [ '.github/workflows/*.yml' ],
		'rules': {
			'yml/sort-keys': [ 'error', {
				'pathPattern': '^$',
				'order': [
					'name',
					'on',
					'concurrency',
					'permissions',
					'env',
					'jobs'
				]
			}]
		}
	}
];


// EXPORTS //

module.exports = config;
