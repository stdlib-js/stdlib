/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var path = require( 'path' );
var merge = require( './../../lib/node_modules/@stdlib/utils/merge' );
var rootDir = require( './../../lib/node_modules/@stdlib/_tools/utils/root-dir' );
var mapValues = require( './../../lib/node_modules/@stdlib/utils/map-values' );
var constantFunction = require( './../../lib/node_modules/@stdlib/utils/constant-function' );
var defaults = require( './.eslintrc.js' );


// EXPORTS //

module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': path.join( rootDir(), 'tsconfig.json' ),
		'sourceType': 'module'
	},
	'plugins': [
		'eslint-plugin-prefer-arrow',
		'eslint-plugin-import',
		'eslint-plugin-no-null',
		'eslint-plugin-jsdoc',
		'@typescript-eslint'
	],
	'root': true,
	'rules': merge( mapValues( defaults.rules, constantFunction( 'off' ) ), {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				'default': 'generic'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/dot-notation': 'off',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				'accessibility': 'no-public'
			}
		],
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/indent': [
			'error',
			'tab'
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'semi',
					'requireLast': true
				},
				'singleline': {
					'delimiter': 'semi',
					'requireLast': false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'selector': 'variable',
				'format': [
					'camelCase',
					'UPPER_CASE'
				],
				'leadingUnderscore': 'forbid',
				'trailingUnderscore': 'forbid'
			}
		],
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-shadow': [
			'off',
			{
				'hoist': 'all'
			}
		],
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				'avoidEscape': true
			}
		],
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/semi': [
			'error',
			'always'
		],
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				'path': 'always',
				'types': 'prefer-import',
				'lib': 'always'
			}
		],
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/typedef': 'error',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs'
		],
		'class-methods-use-this': 'error',
		'comma-dangle': 'off',
		'complexity': 'off',
		'constructor-super': 'error',
		'curly': 'error',
		'default-case': 'error',
		'dot-notation': 'off',
		'eol-last': 'error',
		'eqeqeq': [
			'error',
			'always'
		],
		'guard-for-in': 'error',
		'id-match': 'error',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-internal-modules': 'off',
		'import/no-unassigned-import': 'error',
		'import/order': [
			'error',
			{
				'alphabetize': {
					'caseInsensitive': false,
					'order': 'ignore'
				},
				'newlines-between': 'ignore',
				'groups': [
					[
						'builtin',
						'external',
						'internal',
						'unknown',
						'object',
						'type'
					],
					'parent',
					[
						'sibling',
						'index'
					]
				],
				'distinctGroup': false,
				'pathGroupsExcludedImportTypes': [],
				'pathGroups': [
					{
						'pattern': './',
						'patternOptions': {
							'nocomment': true,
							'dot': true
						},
						'group': 'sibling',
						'position': 'before'
					},
					{
						'pattern': '.',
						'patternOptions': {
							'nocomment': true,
							'dot': true
						},
						'group': 'sibling',
						'position': 'before'
					},
					{
						'pattern': '..',
						'patternOptions': {
							'nocomment': true,
							'dot': true
						},
						'group': 'parent',
						'position': 'before'
					},
					{
						'pattern': '../',
						'patternOptions': {
							'nocomment': true,
							'dot': true
						},
						'group': 'parent',
						'position': 'before'
					}
				]
			}
		],
		'indent': 'off',
		'jsdoc/check-alignment': 'off',
		'jsdoc/check-indentation': 'off',
		'jsdoc/newline-after-description': 'off',
		'jsdoc/no-types': 'error',
		'linebreak-style': [
			'error',
			'unix'
		],
		'max-classes-per-file': [
			'error',
			1
		],
		'max-len': [
			'error',
			{
				'ignorePattern': '^import |\\/\\/ |\\/?\\* ',
				'code': 1000
			}
		],
		'max-lines': [
			'error',
			1000
		],
		'new-parens': 'error',
		'newline-per-chained-call': 'off',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-empty': 'error',
		'no-empty-function': 'off',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-invalid-this': 'error',
		'no-irregular-whitespace': 'error',
		'no-magic-numbers': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2
			}
		],
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-null/no-null': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': [
			'error',
			{
				'allowForLoopAfterthoughts': true
			}
		],
		'no-redeclare': 'error',
		'no-restricted-imports': [
			'error',
			'lodash'
		],
		'no-restricted-syntax': [
			'error',
			'ForInStatement'
		],
		'no-return-await': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'error',
		'no-void': 'error',
		'object-shorthand': [
			'error',
			'never'
		],
		'one-var': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'off',
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'return'
			}
		],
		'prefer-arrow/prefer-arrow-functions': 'off',
		'prefer-const': 'error',
		'prefer-object-spread': 'off',
		'prefer-template': 'off',
		'quote-props': [
			'error',
			'always'
		],
		'quotes': 'off',
		'radix': 'error',
		'require-await': 'off',
		'semi': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'space-in-parens': [
			'error',
			'always'
		],
		'spaced-comment': [
			'error',
			'always',
			{
				'markers': [
					'/'
				]
			}
		],
		'use-isnan': 'error',
		'yoda': 'error'
	})
};
