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

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

'use strict';

/**
* Lint plugins.
*/
var plugins = [ require( 'remark-lint' ) ];

/**
* Require blockquotes to have `2` character indentation.
*
* @see [blockquote-indentation]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-blockquote-indentation}
*
* @example
* <!-- Bad -->
*
* >   Beep boop.
*
* @example
* <!-- Good -->
*
* > Beep boop.
*/
plugins.push([
	require( 'remark-lint-blockquote-indentation' ),
	[ 'error', 2 ]
]);

/**
* Require checkboxes to be either empty (unchecked) or have an `x` (checked).
*
* @see [checkbox-character-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-character-style}
*
* @example
* <!-- Bad -->
*
* -   [X] checked
*
* @example
* <!-- Good -->
*
* -   [x] checked
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
* Prevent checkboxes being followed by too much white-space.
*
* @see [checkbox-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-content-indent}
*
* @example
* <!-- Bad -->
*
* -   [x]    checked
*
* @example
* <!-- Good -->
*
* -   [x] checked
*/
plugins.push([
	require( 'remark-lint-checkbox-content-indent' ),
	[ 'error' ]
]);

/* eslint-disable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Require `fenced` code block style.
*
* @see [code-block-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-code-block-style}
*
* @example
* <!-- Bad -->
*
*
*     code
*     code
*     code
*
* @example
* <!-- Good -->
*
* ```javascript
* code
* code
* code
* ```
*/
plugins.push([
	require( 'remark-lint-code-block-style' ),
	[ 'error', 'fenced' ]
]);

/* eslint-enable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Require lowercased definition labels.
*
* @see [definition-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-case}
*
* @example
* <!-- Bad -->
*
* [Example]: https://example.com
*
* @example
* <!-- Good -->
*
* [example]: https://example.com
*/
plugins.push([
	require( 'remark-lint-definition-case' ),
	[ 'error' ]
]);

/**
* Prevent consecutive whitespace in a definition.
*
* @see [definition-spacing]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-spacing}
*
* @example
* <!-- Bad -->
*
* [hello   world]: https://example.com
*
* @example
* <!-- Good -->
*
* [hello world]: https://example.com
*/
plugins.push([
	require( 'remark-lint-definition-spacing' ),
	[ 'error' ]
]);

/* eslint-disable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Require `_` be used as the emphasis marker.
*
* @see [emphasis-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-emphasis-marker}
*
* @example
* <!-- Bad -->
*
* *beep*
*
* @example
* <!-- Good -->
*
* _beep_
*/
plugins.push([
	require( 'remark-lint-emphasis-marker' ),
	[ 'error', '_' ]
]);

/* eslint-enable stdlib/jsdoc-no-multiple-blank-lines */

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
* ```text
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
* Require backticks `\`` be used as the fenced code marker.
*
* @see [fenced-code-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-marker}
*
* @example
* <!-- Bad -->
*
* ~~~text
* Code
* ~~~
*
* @example
* <!-- Good -->
*
* ```text
* code
* ```
*/
plugins.push([
	require( 'remark-lint-fenced-code-marker' ),
	[ 'error', '`' ]
]);

/**
* Require a Markdown file to have the file extension `*.md`.
*
* @see [file-extension]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-file-extension}
*/
plugins.push([
	require( 'remark-lint-file-extension' ),
	[ 'error', 'md' ]
]);

/**
* Require definitions be placed at the end of a file. Note that we turn this rule off due to definitions being wrapped in HTML tags.
*
* @see [final-definition]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-final-definition}
*/
plugins.push([
	require( 'remark-lint-final-definition' ),
	[ 'off' ]
]);

/**
* Require a final newline (see <http://unix.stackexchange.com/questions/18743>).
*
* @see [final-newline]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-final-newline}
*/
plugins.push([
	require( 'remark-lint-final-newline' ),
	[ 'error' ]
]);

/**
* Require first heading level be a level `1` heading.
*
* @see [first-heading-level]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-first-heading-level}
*/
plugins.push([
	require( 'remark-lint-first-heading-level' ),
	[ 'error', 1 ]
]);

/**
* Prevent too many spaces from being used to hard break.
*
* @see [hard-break-spaces]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-hard-break-spaces}
*/
plugins.push([
	require( 'remark-lint-hard-break-spaces' ),
	[ 'error' ]
]);

/**
* Warn when headings increment by more than 1 level. NOTE: temporarily disabled.
*
* @see [heading-increment]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-heading-increment}
*/
plugins.push([
	require( 'remark-lint-heading-increment' ),
	[ 'off' ]
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
* Prevent unnecessary indentation of list bullets.
*
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent}
*
* @example
* <!-- Bad -->
*
*     -   Beep
*     -   Boop
*
* @example
* <!-- Good -->
*
* -   Beep
* -   Boop
*
*/
plugins.push([
	require( 'remark-lint-list-item-bullet-indent' ),
	[ 'error' ]
]);

/**
* Require consistent indentation of list items.
*
* @see [list-item-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-content-indent}
*
* @example
* <!-- Bad -->
*
* 1.  Beep
*
*      1.  Boop
*
* @example
* <!-- Good -->
*
* 1.  Beep
*
*     1.  Boop
*
*/
plugins.push([
	require( 'remark-lint-list-item-content-indent' ),
	[ 'error' ]
]);

/**
* Require list items use tab-size indentation.
*
* @see [list-item-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-indent}
*
* @example
* <!-- Bad -->
*
* - Hello
* - World
*
* @example
* <!-- Good -->
*
* -   Hello
* -   World
*
* @example
* <!-- Good -->
*
* -   Beep
*     boop
*
* -   Bop
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
* -   Beep
* -   Boop
*
* -   Bop
*
* @example
* <!-- Good -->
*
* -   Beep
* -   Boop
* -   Bop
*
* @example
* <!-- Okay -->
*
* -   Beep
*
* -   Boop
*
* -   Bop
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
* Require all links have a protocol.
*
* @see [no-auto-link-without-protocol]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol}
*
* @example
* <!-- Bad -->
*
* <foo@bar.com>
*
* @example
* <!-- Good -->
*
* <mailto:foo@bar.com>
*
*/
plugins.push([
	require( 'remark-lint-no-auto-link-without-protocol' ),
	[ 'error' ]
]);

/**
* Require caret in blockquotes.
*
* @see [no-blockquote-without-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker}
*
* @example
* <!-- Bad -->
*
* > Beep
*
* > boop
*
* @example
* <!-- Good -->
*
* > Beep
* >
* > boop
*
*/
plugins.push([
	require( 'remark-lint-no-blockquote-without-marker' ),
	[ 'error' ]
]);

/**
* Allow consecutive blank lines.
*
* @see [no-consecutive-blank-lines]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines}
*/
plugins.push([
	require( 'remark-lint-no-consecutive-blank-lines' ),
	[ 'off' ]
]);

/**
* Do not allow duplicate definitions.
*
* @see [no-duplicate-definitions]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions}
*
* @example
* <!-- Bad -->
*
* [foo]: https://example.com
* [foo]: https://github.com
*
* @example
* <!-- Good -->
*
* [foo]: https://example.com
* [bar]: https://github.com
*
*/
plugins.push([
	require( 'remark-lint-no-duplicate-definitions' ),
	[ 'error' ]
]);

/**
* Allow duplicate headings in different sections.
*
* @see [no-duplicate-headings]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings}
*
* @example
* <!-- Okay -->
*
* # Beep
*
* ## Boop
*
* ### Bop
*
* ## Beep
*
* ### Bop
*
*/
plugins.push([
	require( 'remark-lint-no-duplicate-headings' ),
	[ 'off' ]
]);

/**
* Do not allow duplicate headings within a section.
*
* @see [no-duplicate-headings-in-section]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section}
*
* @example
* <!-- Bad -->
*
* # Beep
*
* ## Boop
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
* ## Bop
*
*/
plugins.push([
	require( 'remark-lint-no-duplicate-headings-in-section' ),
	[ 'error' ]
]);

/**
* Never allow emphasis to be used in place of a heading.
*
* @see [no-emphasis-as-heading]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading}
*
* @example
* <!-- Bad -->
*
* _Beep_
*
* Beep boop.
*
* @example
* <!-- Good -->
*
* ## Beep
*
* Beep boop
*
*/
plugins.push([
	require( 'remark-lint-no-emphasis-as-heading' ),
	[ 'error' ]
]);

/**
* Never allow empty URLs in images and links.
*
* @see [no-empty-url]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-empty-url}
*
* @example
* <!-- Bad -->
*
* [foo]()
*
* @example
* <!-- Good -->
*
* [foo](https://example.com)
*
*/
plugins.push([
	require( 'remark-lint-no-empty-url' ),
	[ 'error']
]);

/**
* Never allow filenames to begin with an article.
*
* @see [no-file-name-articles]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-articles}
*/
plugins.push([
	require( 'remark-lint-no-file-name-articles' ),
	[ 'error' ]
]);

/**
* Never allow consecutive dashes in filenames.
*
* @see [no-file-name-consecutive-dashes]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-consecutive-dashes}
*/
plugins.push([
	require( 'remark-lint-no-file-name-consecutive-dashes' ),
	[ 'error' ]
]);

/**
* Never allow filenames to contain irregular characters.
*
* @see [no-file-name-irregular-characters]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-irregular-characters}
*/
plugins.push([
	require( 'remark-lint-no-file-name-irregular-characters' ),
	[ 'error', '\\.a-zA-Z0-9-_' ]
]);

/**
* Never allow mixed case filenames.
*
* @see [no-file-name-mixed-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-mixed-case}
*/
plugins.push([
	require( 'remark-lint-no-file-name-mixed-case' ),
	[ 'error' ]
]);

/**
* Never allow filenames to begin or end with dashes.
*
* @see [no-file-name-outer-dashes]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-outer-dashes}
*/
plugins.push([
	require( 'remark-lint-no-file-name-outer-dashes' ),
	[ 'error' ]
]);

/**
* Never allow heading content indentation.
*
* @see [no-heading-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-heading-content-indent}
*
* @example
* <!-- Bad -->
*
* # Beep
*
* ##   Boop
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
	require( 'remark-lint-no-heading-content-indent' ),
	[ 'error' ]
]);

/**
* Never allow heading indentation.
*
* @see [no-heading-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-heading-indent}
*
* @example
* <!-- Bad -->
*
* # Beep
*
*   ## Beep
*
* @example
* <!-- Bad -->
*
* # Beep
*
*   Beep boop.
*
* @example
* <!-- Good -->
*
* # Beep
*
* ## Boop
*
* Beep boop.
*
*/
plugins.push([
	require( 'remark-lint-no-heading-indent' ),
	[ 'error' ]
]);

/**
* Never allow paragraphs which appear to be h7+ "headings".
*
* @see [no-heading-like-paragraph]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-heading-like-paragraph}
*
* @example
* <!-- Bad -->
*
* ####### Beep
*
*/
plugins.push([
	require( 'remark-lint-no-heading-like-paragraph' ),
	[ 'error' ]
]);

/**
* Do not allow punctuation at the end of a heading.
*
* @see [no-heading-punctuation]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-heading-punctuation}
*
* @example
* <!-- Bad -->
*
* ## Beep.
*
*/
plugins.push([
	require( 'remark-lint-no-heading-punctuation' ),
	[ 'error', '.,;:!?' ]
]);

/**
* Allow HTML.
*
* @see [no-html]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-html}
*
* @example
* <!-- Okay -->
*
* <section class="intro">
*
* Beep boop.
*
* </section>
*/
plugins.push([
	require( 'remark-lint-no-html' ),
	[ 'off' ]
]);

/**
* Never allow inline padding.
*
* @see [no-inline-padding]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-inline-padding}
*
* @example
* <!-- Bad -->
*
* __ Beep __
*
* @example
* <!-- Good -->
*
* __Beep__
*
*/
plugins.push([
	require( 'remark-lint-no-inline-padding' ),
	[ 'error' ]
]);

/**
* Never allow literal URLs without angle brackets.
*
* @see [no-literal-urls]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-literal-urls}
*
* @example
* <!-- Bad -->
*
* https://example.com
*
* @example
* <!-- Good -->
*
* <https://example.com>
*
*/
plugins.push([
	require( 'remark-lint-no-literal-urls' ),
	[ 'error' ]
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
* Never allow paragraph indentation.
*
* @see [no-paragraph-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-paragraph-content-indent}
*
* @example
* <!-- Bad -->
*
* # Beep
*
*   Boop.
*
* @example
* <!-- Good -->
*
* # Beep
*
* Boop.
*/
plugins.push([
	require( 'remark-lint-no-paragraph-content-indent' ),
	[ 'error' ]
]);

/**
* Never allow references to be used like URLs.
*
* @see [no-reference-like-url]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-reference-like-url}
*
* @example
* <!-- Bad -->
*
* [Beep](boop).
*
* [boop]: https://example.com
*
* @example
* <!-- Good -->
*
* [Beep](https://example.com)
*
* [boop]: https://github.com
*
*/
plugins.push([
	require( 'remark-lint-no-reference-like-url' ),
	[ 'error' ]
]);

/**
* Allow shell commands to be prefixed with `$` symbols.
*
* @see [no-shell-dollars]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-shell-dollars}
*
* @example
* <!-- Okay -->
*
* ```bash
* $ echo beep
* ```
*/
plugins.push([
	require( 'remark-lint-no-shell-dollars' ),
	[ 'off' ]
]);

/**
* Never allow shortcut reference images.
*
* @see [no-shortcut-reference-image]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-shortcut-reference-image}
*
* @example
* <!-- Bad -->
*
* ![foo]
*
* [foo]: https://example.com/1.png
*
* @example
* <!-- Good -->
*
* ![foo][]
*
* [foo]: https://example.com/1.png
*
*/
plugins.push([
	require( 'remark-lint-no-shortcut-reference-image' ),
	[ 'error' ]
]);

/**
* Never allow shortcut reference links.
*
* @see [no-shortcut-reference-link]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-shortcut-reference-link}
*
* @example
* <!-- Bad -->
*
* [foo]
*
* [foo]: https://example.com/1.png
*
* @example
* <!-- Good -->
*
* [foo][]
*
* [foo]: https://example.com/1.png
*
*/
plugins.push([
	require( 'remark-lint-no-shortcut-reference-link' ),
	[ 'error' ]
]);

/**
* Never allow table indentation. Note that the exception is when a table correspond to a list item.
*
* @see [no-table-indentation]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-table-indentation}
*
* @example
* <!-- Bad -->
*
* Beep.
*
*     | Beep | Boop |
*     | ---- | ---- |
*     | foo  | bar  |
*
* @example
* <!-- Good -->
*
* Beep.
*
* | Beep | Boop |
* | ---- | ---- |
* | foo  | bar  |
*
*/
plugins.push([
	require( 'remark-lint-no-table-indentation' ),
	[ 'error' ]
]);

/**
* Never allow the use of tabs.
*
* @see [no-tabs]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-tabs}
*/
plugins.push([
	require( 'remark-lint-no-tabs' ),
	[ 'error' ]
]);

/**
* Never allow trailing whitespace.
*
* @see [no-trailing-spaces]{@link https://github.com/Trott/remark-lint-no-trailing-spaces}
*/

// plugins.push([require( 'remark-lint-no-trailing-spaces' ), [ 'error' ]]);

/**
* Never allow undefined references.
*
* @see [no-undefined-references]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-undefined-references}
*
* @example
* <!-- Bad -->
*
* [foo][]
*
* @example
* <!-- Good -->
*
* [foo][]
*
* [foo]: https://example.com
*/
plugins.push([
	require( 'remark-lint-no-undefined-references' ),
	[ 'error' ]
]);

/**
* Never allow unused definitions.
*
* @see [no-unused-definitions]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-unused-definitions}
*
* @example
* <!-- Bad -->
*
* [foo]: https://example.com
*
* @example
* <!-- Good -->
*
* [foo][foo].
*
* [foo]: https://example.com
*
*/
plugins.push([
	require( 'remark-lint-no-unused-definitions' ),
	[ 'error' ]
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

/* eslint-disable stdlib/jsdoc-no-multiple-blank-lines */

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

/* eslint-enable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Set the strong marker to asterisks.
*
* @see [strong-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-strong-marker}
*
* @example
* <!-- Bad -->
*
* __Beep__.
*
* @example
* <!-- Good -->
*
* **Beep**.
*
*/
plugins.push([
	require( 'remark-lint-strong-marker' ),
	[ 'error', '*' ]
]);

/**
* Require table padding.
*
* @see [table-cell-padding]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-table-cell-padding}
*
* @example
* <!-- Bad -->
*
* |Beep|Boop|
* |----|----|
* |foo |bar |
*
* @example
* <!-- Good -->
*
* | Beep | Boop |
* | ---- | ---- |
* | foo  | bar  |
*
*/
plugins.push([
	require( 'remark-lint-table-cell-padding' ),
	[ 'error', 'padded' ]
]);

/**
* Require table pipe alignment.
*
* @see [table-pipe-alignment]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment}
*
* @example
* <!-- Bad -->
*
* | Beep | Boop |
* | -- | -- |
* | foo | bar |
*
* @example
* <!-- Good -->
*
* | Beep | Boop |
* | ---- | ---- |
* | foo  | bar  |
*
*/
plugins.push([
	require( 'remark-lint-table-pipe-alignment' ),
	[ 'error' ]
]);

/**
* Require table rows to be fenced in table pipes.
*
* @see [table-pipes]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-table-pipes}
*
* @example
* <!-- Bad -->
*
* Beep | Boop
* ---- | ----
* foo  | bar
*
* @example
* <!-- Good -->
*
* | Beep | Boop |
* | ---- | ---- |
* | foo  | bar  |
*
*/
plugins.push([
	require( 'remark-lint-table-pipes' ),
	[ 'error' ]
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
