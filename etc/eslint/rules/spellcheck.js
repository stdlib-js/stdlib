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
			'/@name [a-zA-Z0-9]+/g', // ignore package names in JSDoc
			'/\\/\\/ returns \'[^\']+\'/g', // ignore return value annotations in JSDoc
			'/setReadOnly\\( [.a-z0-9]+, \'[^\']+\'/gi', // ignore namespace or prototype assignments
			'/```tex\\n[\\s\\S]+```/g', // ignore LaTeX code blocks
			'/\\\\{2,2}\\([\\s\\S]+?\\\\{2,2}\\)/g', // ignore LaTeX math expressions
			'/`[^`]+`/g', // ignore inline code
			'/\\[[^\\]]+\\]/g', // ignore character classes in regular expressions or markdown links
			'/\\/\\/ exports: \\{[^}]+\\}/g', // ignore export annotations
			'/@param \\{[^}]+\\}/g' // ignore parameter annotations in JSDoc
		],
		'words': [
			'clbk',
			'BLAS',
			'boop',
			'bonferroni',
			'hommel',
			'congruential',
			'coversed',
			'dilogarithm',
			'dtypes',
			'dtype',
			'nargs',
			'ndarray',
			'strided',
			'logit',
			'lpad',
			'rpad',
			'nrows',
			'ncols',
			'meanx',
			'meany',
			'pvalues',
			'stringifying',
			'uncapitalize',
			'rtrim',
			'ltrim',
			'randu',
			'randn',
			'xbar',
			'ybar',
			'xbuf',
			'ybuf',
			'tricube',
			'stdev',
			'logcdf',
			'logpdf',
			'logpmf',
			'studentized',
			'significand'
		]
	}
}];


// EXPORTS //

module.exports = rules;
