/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/**
* ESLint rules for spellchecking.
*
* @namespace rules
*/
var rules = {};

/**
* Warn when encountering potentially misspelled words in comments and strings.
*
* @name @cspell/spellchecker
* @memberof rules
* @type {Array}
* @see [spellchecker]{@link https://www.npmjs.com/package/@cspell/eslint-plugin}
*
* @example
* // Bad...
* var str = 'Functionl programming is a paradigm...';
*
* @example
* // Good...
* var str = 'Functional programming is a paradigm...';
*/
rules[ '@cspell/spellchecker' ] = [ 'warn', {
	'checkComments': true,
	'checkStrings': true,
	'autoFix': false,
	'checkIdentifiers': false,
	'cspell': {
		'allowCompoundWords': true,
		'ignoreRegExpList': [
			'/[a-z0-9.]+\\(/gi', // ignore functions or methods invoked in comments
			'/var [a-zA-Z0-9]+/g', // ignore variable declarations
			'/[A-Z][a-z]+/g', // ignore proper nouns
			'/[A-Z]+/g', // ignore acronyms
			'/@stdlib\\/[a-z0-9/-]+/g', // ignore stdlib package paths
			'/@name [a-zA-Z0-9]+/g', // ignore identifier names in JSDoc
			'/\\/\\/ returns \'[^\']+\'/g', // ignore return value annotations
			'/setReadOnly\\( [.a-z0-9]+, \'[^\']+?\'/gi', // ignore namespace or prototype assignments
			'/```[\\s\\S]+?```/g', // ignore code blocks
			'/(?<!`)`[^`]+?`(?!`)/g', // ignore inline code
			'/\\\\{2,2}\\([\\s\\S]+?\\\\{2,2}\\)/g', // ignore LaTeX math expressions
			'/\\[[^\\]]+\\]/g', // ignore character classes in regular expressions or markdown links
			'/\\/\\/ exports: \\{[^}]+\\}/g', // ignore export annotations
			'/@param \\{[^}]+\\} [?[a-zA-Z0-9.]+]? -/g', // ignore parameter annotations in JSDoc
			'/@returns \\{[^}]+?\\}/g', // ignore returns annotations in JSDoc
			'/[xy][a-z]+/g', // lowercase parameters starting with x or y (e.g., xbuf)
			'/[a-z]+[xy]/g', // lowercase parameters ending with x or y (e.g., meanx)
			'/([\'"`])(.*/.*?)\\1/g', // ignore file paths
			'/\'[-\\w]+?\'/g' // ignore single-quoted strings containing only word characters or hyphens
		],
		'words': [
			'BLAS',
			'bonferroni',
			'boop',
			'clbk',
			'congruential',
			'convergents',
			'coversed',
			'dilogarithm',
			'dtype',
			'dtypes',
			'exponentiated',
			'evalpoly',
			'evalrational',
			'hommel',
			'iget',
			'iset',
			'logcdf',
			'logit',
			'logpdf',
			'logpmf',
			'lpad',
			'ltrim',
			'napi',
			'nargs',
			'ncols',
			'ndims',
			'ndim',
			'nout',
			'ndarray',
			'ndarrays',
			'nrows',
			'nsubmodes',
			'pvalues',
			'randn',
			'randu',
			'rpad',
			'rtrim',
			'significand',
			'stdev',
			'strided',
			'stringifying',
			'studentized',
			'tricube',
			'trigamma',
			'uncapitalize',
			'unregularized'
		]
	}
}];


// EXPORTS //

module.exports = rules;
