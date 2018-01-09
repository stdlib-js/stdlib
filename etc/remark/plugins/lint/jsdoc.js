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
* Disable rule requiring a Markdown file to have the file extension `*.md`, as not relevant for JSDoc comments.
*
* @see [file-extension]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-file-extension}
*/
plugins.push([
	require( 'remark-lint-file-extension' ),
	[ 'off' ]
]);

/**
* Disable rule requiring a final newline (see <http://unix.stackexchange.com/questions/18743>), as not relevant to JSDoc comments.
*
* @see [final-newline]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-final-newline}
*/
plugins.push([
	require( 'remark-lint-final-newline' ),
	[ 'off' ]
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
* Allow consecutive blank lines.
*
* @see [no-consecutive-blank-lines]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines}
*/
plugins.push([
	require( 'remark-lint-no-consecutive-blank-lines' ),
	[ 'off' ]
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
* Disable rule never allowing filenames to begin with an article, as not relevant to JSDoc comments.
*
* @see [no-file-name-articles]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-articles}
*/
plugins.push([
	require( 'remark-lint-no-file-name-articles' ),
	[ 'off' ]
]);

/**
* Disable rule never allowing consecutive dashes in filenames, as not relevant to JSDoc comments.
*
* @see [no-file-name-consecutive-dashes]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-consecutive-dashes}
*/
plugins.push([
	require( 'remark-lint-no-file-name-consecutive-dashes' ),
	[ 'off' ]
]);

/**
* Disable rule never allowing filenames to contain irregular characters, as not relevant to JSDoc comments.
*
* @see [no-file-name-irregular-characters]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-irregular-characters}
*/
plugins.push([
	require( 'remark-lint-no-file-name-irregular-characters' ),
	[ 'off' ]
]);

/**
* Disable rule never allowing mixed case filenames, as not relevant to JSDoc comments.
*
* @see [no-file-name-mixed-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-mixed-case}
*/
plugins.push([
	require( 'remark-lint-no-file-name-mixed-case' ),
	[ 'off' ]
]);

/**
* Disable rule never allowing filenames to begin or end with dashes, as not relevant to JSDoc comments.
*
* @see [no-file-name-outer-dashes]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-file-name-outer-dashes}
*/
plugins.push([
	require( 'remark-lint-no-file-name-outer-dashes' ),
	[ 'off' ]
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
* ``` bash
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
*
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
