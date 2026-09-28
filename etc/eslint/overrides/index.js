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

var resolve = require( 'path' ).resolve;
var restrictedSyntaxConfig = require( './restricted_syntax.js' );


// MAIN //

/**
* ESLint overrides.
*
* @namespace overrides
*/
var overrides = [
	{
		'files': [ 'etc/eslint/rules/*.js' ],
		'rules': {
			'stdlib/jsdoc-doctest': 'off'
		}
	},
	{
		'files': [ '[a-z].js' ],
		'rules': {
			'stdlib/repl-namespace-order': 'error'
		}
	},
	{
		'files': [ '**/benchmark/*.js' ],
		'rules': {
			'no-new-wrappers': 'warn',
			'max-lines': [ 'warn', {
				'max': 1000,
				'skipBlankLines': true,
				'skipComments': true
			}],
			'no-restricted-syntax': restrictedSyntaxConfig,
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
			'stdlib/no-unnecessary-nested-functions': 'off'
		}
	},
	{
		'files': [ '**/examples/*.js' ],
		'rules': {
			'no-new-wrappers': 'warn',
			'vars-on-top': 'off',
			'no-console': 'off',
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
			'stdlib/no-unnecessary-nested-functions': 'off',
			'stdlib/vars-order': 'off'
		}
	},
	{
		'files': [ '**/test/*.js' ],
		'rules': {
			'no-empty-function': 'off',
			'no-new-wrappers': 'warn',
			'max-lines': [ 'warn', {
				'max': 1000,
				'skipBlankLines': true,
				'skipComments': true
			}],
			'no-restricted-syntax': restrictedSyntaxConfig,
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
			'stdlib/no-single-property-require': 'off',
			'stdlib/no-unnecessary-nested-functions': 'off',
			'no-undefined': 'off'
		}
	},
	{
		'files': [ '*.md' ],
		'rules': {
			'eol-last': 'off',
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
			'no-console': 'off',
			'no-sync': 'off',
			'no-tabs': 'error',
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'jsdoc/require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-return-annotations-values': 'off',
			'stdlib/no-single-property-require': 'off',
			'stdlib/no-unnecessary-nested-functions': 'off',
			'stdlib/return-annotations-values': 'off',
			'strict': 'off',
			'vars-on-top': 'off',
			'n/no-unpublished-require': 'off'
		}
	},
	{
		'files': [ '*.d.ts' ],
		'extends': resolve( __dirname, '..', '.eslintrc.typescript.js' )
	},
	{
		'files': [ '**/test/*.ts' ],
		'extends': resolve( __dirname, '..', '.eslintrc.typescript.tests.js' )
	}
];


// EXPORTS //

module.exports = overrides;
