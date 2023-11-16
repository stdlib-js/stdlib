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


// VARIABLES //

var restrictedSyntaxConfig = [ 'error',
	'ArrowFunctionExpression',
	'ClassBody',
	'ClassDeclaration',
	'ClassExpression',
	'DebuggerStatement',
	'ExperimentalRestProperty',
	'ExperimentalSpreadProperty',

	// 'FunctionExpression',
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


// MAIN //

/**
* ESLint overrides.
*
* @namespace overrides
*/
var overrides = [
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
			'require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off'
		}
	},
	{
		'files': [ '**/examples/*.js' ],
		'rules': {
			'no-new-wrappers': 'warn',
			'vars-on-top': 'off',
			'no-console': 'off',
			'require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
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
			'require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-doctest': 'off',
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
			'require-jsdoc': 'off',
			'stdlib/jsdoc-private-annotation': 'off',
			'stdlib/jsdoc-return-annotations-values': 'off',
			'stdlib/return-annotations-values': 'off',
			'strict': 'off',
			'vars-on-top': 'off',
			'node/no-unpublished-require': 'off'
		}
	},
	{
		'files': [ '*.d.ts', '*.ts', '*.tsx' ],
		'extends': resolve( __dirname, '..', '.eslintrc.typescript.js' )
	}
];


// EXPORTS //

module.exports = overrides;
