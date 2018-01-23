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
* Require first heading level be a level `2` heading in JSDoc comments. A level `1` heading is implied.
*
* @see [first-heading-level]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-first-heading-level}
*/
plugins.push([
	require( 'remark-lint-first-heading-level' ),
	[ 'error', 2 ]
]);

/**
* Warn when headings increment by more than 1 level.
*
* @see [heading-increment]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-heading-increment}
*/
plugins.push([
	require( 'remark-lint-heading-increment' ),
	[ 'warn' ]
]);

/**
* Require `atx` heading style.
*
* @see [heading-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-heading-style}
*
* @example
* <!-- Bad -->
*
* Beep
* ===
*
* ## Boop
*
* @example
* <!-- Good -->
*
* # Beep
*
* ## Boop
*
*/
plugins.push([
	require( 'remark-lint-heading-style' ),
	[ 'error', 'atx' ]
]);

/**
* Require Unix linebreaks.
*
* @see [linebreak-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-linebreak-style}
*/
plugins.push([
	require( 'remark-lint-linebreak-style' ),
	[ 'error', 'unix' ]
]);

/**
* Require double quotes for link titles.
*
* @see [link-title-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-link-title-style}
*
* @example
* <!-- Bad -->
*
* [example](https://example.com (Example))
*
* @example
* <!-- Good -->
*
* [example](https://example.com "Example")
*/
plugins.push([
	require( 'remark-lint-link-title-style' ),
	[ 'error', '"' ]
]);

/**
* Require list items use tab-size indentation.
*
* @see [list-item-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-indent}
*
* @example
* <!-- Bad -->
*
* * Hello
* * World
*
* @example
* <!-- Good -->
*
* *   Hello
* *   World
*
* @example
* <!-- Good -->
*
* *   Beep
*     boop
*
* *   Bop
*     bip
*
*/
plugins.push([
	require( 'remark-lint-list-item-indent' ),
	[ 'error', 'tab-size' ]
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
* Require that heading lengths be less than or equal to `80` characters.
*
* @see [maximum-heading-length]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-maximum-heading-length}
*/
plugins.push([
	require( 'remark-lint-maximum-heading-length' ),
	[ 'error', 80 ]
]);

/**
* Do not enforce a maximum line length.
*
* @see [maximum-line-length]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-maximum-line-length}
*/
plugins.push([
	require( 'remark-lint-maximum-line-length' ),
	[ 'off' ]
]);

/**
* Require blank lines between block nodes.
*
* @see [no-missing-blank-lines]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-missing-blank-lines}
*
* @example
* <!-- Bad -->
*
* # Beep
* ## Boop
*
* @example
* <!-- Good -->
*
* # Beep
*
* ## Boop
*
*/
plugins.push([
	require( 'remark-lint-no-missing-blank-lines' ),
	[
		'error',
		{
			'exceptTightLists': true
		}
	]
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
* Prefer ordered, but allow discretion when determining appropriate ordered list marker value.
*
* @see [ordered-list-marker-value]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value}
*
* @example
* <!-- Okay -->
*
* 1. Foo
* 2. Bar
* 3. Beep
* 4. Boop
*
* @example
* <!-- Okay -->
*
* 1. Foo
* 1. Bar
* 1. Beep
* 1. Boop
*
*/
plugins.push([
	require( 'remark-lint-ordered-list-marker-value' ),
	[ 'off', 'ordered' ]
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

/**
* Require that the unordered list marker be a dash `-`.
*
* @see [unordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style}
*
* @example
* <!-- Bad -->
*
* *   Beep
* *   Boop
*
* @example
* <!-- Okay -->
*
* -   Beep
*
*     -   Foo
*     -   Bar
*
* -   Boop
*
*/
plugins.push([
	require( 'remark-lint-unordered-list-marker-style' ),
	[ 'error', '-' ]
]);


// EXPORTS //

module.exports = plugins;
