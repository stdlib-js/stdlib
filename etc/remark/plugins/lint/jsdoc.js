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

/* eslint-disable stdlib/jsdoc-return-annotations-marker, stdlib/jsdoc-return-annotations-quote-props */

'use strict';

/**
* Lint plugins for linting Markdown in JSDoc comments.
*/
var plugins = [ require( 'remark-lint' ) ];

/**
* Require checkboxes to be either empty (unchecked) or have an `x` (checked).
*
* @see [checkbox-character-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-character-style}
*
* @example
* <!-- Bad -->
*
* *   [X] checked
*
* @example
* <!-- Good -->
*
* *   [x] checked
*/
plugins.push([
	require( 'remark-lint-checkbox-character-style' ),
	[
		'error',
		{
			'checked': 'x',
			'unchecked': ' '
		}
	]
]);

/**
* Require fenced code blocks to have a language flag.
*
* @see [fenced-code-flag]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-flag}
*
* @example
* <!-- Bad -->
*
* ```
* code
* ```
*
* @example
* <!-- Good -->
*
* ``` text
* code
* ```
*/
plugins.push([
	require( 'remark-lint-fenced-code-flag' ),
	[
		'error',
		{
			'allowEmpty': false
		}
	]
]);

/**
* Require consistent list item spacing.
*
* @see [list-item-spacing]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-spacing}
*
* @example
* <!-- Bad -->
*
* *   Beep
* *   Boop
*
* *   Bop
*
* @example
* <!-- Good -->
*
* *   Beep
* *   Boop
* *   Bop
*
* @example
* <!-- Okay -->
*
* *   Beep
*
* *   Boop
*
* *   Bop
*
*/
plugins.push([
	require( 'remark-lint-list-item-spacing' ),
	[ 'error' ]
]);

/**
* Allow multiple top-level headings.
*
* @see [no-multiple-toplevel-headings]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-multiple-toplevel-headings}
*
* @example
* <!-- Okay -->
*
* # Beep
*
* # Boop
*
*/
plugins.push([
	require( 'remark-lint-no-multiple-toplevel-headings' ),
	[ 'off' ]
]);

/**
* Require ordered lists to use periods (e.g., `1.`, `2.`, etc).
*
* @see [ordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-style}
*
* @example
* <!-- Bad -->
*
* 1) Foo
* 2) Bar
*
* @example
* <!-- Good -->
*
* 1. Foo
* 2. Bar
*
*/
plugins.push([
	require( 'remark-lint-ordered-list-marker-style' ),
	[ 'error', '.' ]
]);

/**
* Require that the horizontal rule style be three consecutive asterisks `---`.
*
* @see [rule-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-rule-style}
*
* @example
* <!-- Bad -->
*
* ---
*
* @example
* <!-- Good -->
*
* * * *
*
*/
plugins.push([
	require( 'remark-lint-rule-style' ),
	[ 'error', '* * *' ]
]);


// EXPORTS //

module.exports = plugins;
