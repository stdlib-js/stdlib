'use strict';

/**
* Lint rules.
*
* @namespace rules
*/
var rules = {};

/**
* Reset all rules.
*
* @name reset
* @memberof rules
* @type {boolean}
* @default true
* @see [reset]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#reset}
*/
rules[ 'reset' ] = true;

/**
* Require blockquotes to have `2` character indentation.
*
* @name blockquote-indentation
* @memberof rules
* @type {Array}
* @default [ 'error', 2 ]
* @see [blockquote-indentation]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#blockquote-indentation}
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
rules[ 'blockquote-indentation' ] = [ 'error', 2 ];

/**
* Require checkboxes to be either empty (unchecked) or have an `x` (checked).
*
* @name checkbox-character-style
* @memberof rules
* @type {Array}
* @see [checkbox-character-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#checkbox-character-style}
*
* @example
* <!-- Bad -->
*
* * [X] checked
*
* @example
* <!-- Good -->
*
* * [x] checked
*/
rules[ 'checkbox-character-style' ] = [ 'error', {
	'checked': 'x',
	'unchecked': ' '
}];

/**
* Prevent checkboxes being followed by too much white-space.
*
* @name checkbox-content-indent
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [checkbox-content-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#checkbox-content-indent}
*
* @example
* <!-- Bad -->
*
* * [x]    checked
*
* @example
* <!-- Good -->
*
* * [x] checked
*/
rules[ 'checkbox-content-indent' ] = [ 'error' ];

/**
* Require `fenced` code block style.
*
* @name code-block-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'fenced' ]
* @see [code-block-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#code-block-style}
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
* ``` javascript
* code
* code
* code
* ```
*/
rules[ 'code-block-style' ] = [ 'error', 'fenced' ];

/**
* Require lowercased definition labels.
*
* @name definition-case
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [definition-case]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#definition-case}
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
rules[ 'definition-case' ] = [ 'error' ];

/**
* Prevent consecutive whitespace in a definition.
*
* @name definition-spacing
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [definition-spacing]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#definition-spacing}
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
rules[ 'definition-spacing' ] = [ 'error' ];

/**
* Require `*` be used as the emphasis marker.
*
* @name emphasis-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '*' ]
* @see [emphasis-marker]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#emphasis-marker}
*
* @example
* <!-- Bad -->
*
* _beep_
*
* @example
* <!-- Good -->
*
* *beep*
*/
rules[ 'emphasis-marker' ] = [ 'error', '*' ];

/**
* Require fenced code blocks to have a language flag.
*
* @name fenced-code-flag
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [fenced-code-flag]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#fenced-code-flag}
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
rules[ 'fenced-code-flag' ] = [ 'error' ];

/**
* Require backticks `\`` be used as the fenced code marker.
*
* @name fenced-code-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '`' ]
* @see [fenced-code-marker]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#fenced-code-marker}
*
* @example
* <!-- Bad -->
*
* ~~~ text
* Code
* ~~~
*
* @example
* <!-- Good -->
*
* ``` text
* code
* ```
*/
rules[ 'fenced-code-marker' ] = [ 'error', '`' ];

/**
* Require a Markdown file to have the file extension `*.md`.
*
* @name file-extension
* @memberof rules
* @type {Array}
* @default [ 'error', 'md' ]
* @see [file-extension]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#file-extension}
*/
rules[ 'file-extension' ] = [ 'error', 'md' ];

/**
* Require definitions be placed at the end of a file. Note that we turn this rule off due to definitions being wrapped in HTML tags.
*
* @name final-definition
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [final-definition]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#final-definition}
*/
rules[ 'final-definition' ] = [ 'off' ];

/**
* Require a final newline (see <http://unix.stackexchange.com/questions/18743>).
*
* @name final-newline
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [final-newline]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#final-newline}
*/
rules[ 'final-newline' ] = [ 'error' ];

/**
* Require first heading level be a level `1` heading.
*
* @name first-heading-level
* @memberof rules
* @type {Array}
* @default [ 'error', 1 ]
* @see [first-heading-level]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#first-heading-level}
*/
rules[ 'first-heading-level' ] = [ 'error', 1 ];

/**
* Prevent too many spaces from being used to hard break.
*
* @name hard-break-spaces
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [hard-break-spaces]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#hard-break-spaces}
*/
rules[ 'hard-break-spaces' ] = [ 'error' ];

/**
* Warn when headings increment by more than 1 level. NOTE: temporarily disabled.
*
* @name heading-increment
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [heading-increment]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#heading-increment}
*/
rules[ 'heading-increment' ] = [ 'off' ];

/**
* Required `atx` heading style.
*
* @name heading-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'atx' ]
* @see [heading-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#heading-style}
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
rules[ 'heading-style' ] = [ 'error', 'atx' ];

/**
* Require double quotes for link titles.
*
* @name link-title-style
* @memberof rules
* @type {Array}
* @default [ 'error', '"' ]
* @see [link-title-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#link-title-style}
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
rules[ 'link-title-style' ] = [ 'error', '"' ];

/**
* Prevent unnecessary indentation of list bullets.
*
* @name list-item-bullet-indent
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#list-item-bullet-indent}
*
* @example
* <!-- Bad -->
*
*     * Beep
*     * Boop
*
* @example
* <!-- Good -->
*
* * Beep
* * Boop
*
*/
rules[ 'list-item-bullet-indent' ] = [ 'error' ];

/**
* Require consistent indentation of list items.
*
* @name list-item-content-indent
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [list-item-content-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#list-item-content-indent}
*
* @example
* <!-- Bad -->
*
* * Beep
*     - Boop
*
* @example
* <!-- Good -->
*
* * Beep
*   - Boop
*
*/
rules[ 'list-item-content-indent' ] = [ 'error' ];

/**
* Require list items be indented using spaces.
*
* @name list-item-indent
* @memberof rules
* @type {Array}
* @default [ 'error', 'space' ]
* @see [list-item-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#list-item-indent}
*
* @example
* <!-- Good -->
*
* * Hello
* * World
*
* @example
* <!-- Good -->
*
* * Beep
*   boop
*
* * Bop
*   bip
*
*/
rules[ 'list-item-indent' ] = [ 'error', 'space' ];

/**
* Require consistent list item spacing.
*
* @name list-item-spacing
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [list-item-spacing]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#list-item-spacing}
*
* @example
* <!-- Bad -->
*
* * Beep
* * Boop
*
* * Bop
*
* @example
* <!-- Good -->
*
* * Beep
* * Boop
* * Bop
*
* @example
* <!-- Okay -->
*
* * Beep
*
* * Boop
*
* * Bop
*
*/
rules[ 'list-item-spacing' ] = [ 'error' ];

/**
* Require that heading lengths be less than or equal to `80` characters.
*
* @name maximum-heading-length
* @memberof rules
* @type {Array}
* @default [ 'error', 80 ]
* @see [maximum-heading-length]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#maximum-heading-length}
*/
rules[ 'maximum-heading-length' ] = [ 'error', 80 ];

/**
* Do not enforce a maximum line length.
*
* @name maximum-line-length
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [maximum-line-length]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#maximum-line-length}
*/
rules[ 'maximum-line-length' ] = [ 'off' ];

/**
* Require all links have a protocol.
*
* @name no-auto-link-without-protocol
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-auto-link-without-protocol]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-auto-link-without-protocol}
*
* @example
* <!-- Bad -->
*
* <example.com>
*
* @example
* <!-- Good -->
*
* <https://example.com>
*
*/
rules[ 'no-auto-link-without-protocol' ] = [ 'error' ];

/**
* Require caret in blockquotes.
*
* @name no-blockquote-without-caret
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-blockquote-without-caret]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-blockquote-without-caret}
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
rules[ 'no-blockquote-without-caret' ] = [ 'error' ];

/**
* Allow consecutive blank lines.
*
* @name no-consecutive-blank-lines
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [no-consecutive-blank-lines]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-consecutive-blank-lines}
*/
rules[ 'no-consecutive-blank-lines' ] = [ 'off' ];

/**
* Do not allow duplicate definitions.
*
* @name no-duplicate-definitions
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-duplicate-definitions]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-duplicate-definitions}
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
rules[ 'no-duplicate-definitions' ] = [ 'error' ];

/**
* Do not allow duplicate headings within a section.
*
* @name no-duplicate-headings-in-section
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-duplicate-headings-in-section]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-duplicate-headings-in-section}
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
rules[ 'no-duplicate-headings-in-section' ] = [ 'error' ];

/**
* Allow duplicate headings in different sections.
*
* @name no-duplicate-headings
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [no-duplicate-headings]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-duplicate-headings}
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
rules[ 'no-duplicate-headings' ] = [ 'off' ];

/**
* Never allow emphasis to be used in place of a heading.
*
* @name no-emphasis-as-heading
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-emphasis-as-heading]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-emphasis-as-heading}
*
* @example
* <!-- Bad -->
*
* *Beep*
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
rules[ 'no-emphasis-as-heading' ] = [ 'error' ];

/**
* Never allow empty URLs in images and links.
*
* @name no-empty-url
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-empty-url]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-empty-url}
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
rules[ 'no-empty-url' ] = [ 'error' ];

/**
* Never allow filenames to begin with an article.
*
* @name no-file-name-articles
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-file-name-articles]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-file-name-articles}
*/
rules[ 'no-file-name-articles' ] = [ 'error' ];

/**
* Never allow consecutive dashes in filenames.
*
* @name no-file-name-consecutive-dashes
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-file-name-consecutive-dashes]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-file-name-consecutive-dashes}
*/
rules[ 'no-file-name-consecutive-dashes' ] = [ 'error' ];

/**
* Never allow filenames to contain irregular characters.
*
* @name no-file-name-irregular-characters
* @memberof rules
* @type {Array}
* @default [ 'error', '\\.a-zA-Z0-9-_' ]
* @see [no-file-name-irregular-characters]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-file-name-irregular-characters}
*/
rules[ 'no-file-name-irregular-characters' ] = [ 'error', '\\.a-zA-Z0-9-_' ];

/**
* Never allow mixed case filenames.
*
* @name no-file-name-mixed-case
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-file-name-mixed-case]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-file-name-mixed-case}
*/
rules[ 'no-file-name-mixed-case' ] = [ 'error' ];

/**
* Never allow filenames to begin or end with dashes.
*
* @name no-file-name-outer-dashes
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-file-name-outer-dashes]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-file-name-outer-dashes}
*/
rules[ 'no-file-name-outer-dashes' ] = [ 'error' ];

/**
* Never allow heading content indentation.
*
* @name no-heading-content-indent
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-heading-content-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-heading-content-indent}
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
rules[ 'no-heading-content-indent' ] = [ 'error' ];

/**
* Never allow heading indentation.
*
* @name no-heading-indent
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-heading-indent]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-heading-indent}
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
rules[ 'no-heading-indent' ] = [ 'error' ];

/**
* Never allow paragraphs which appear to be h7+ "headings".
*
* @name no-heading-like-paragraph
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-heading-like-paragraph]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-heading-like-paragraph}
*
* @example
* <!-- Bad -->
*
* ####### Beep
*
*/
rules[ 'no-heading-like-paragraph' ] = [ 'error' ];

/**
* Do not allow punctuation at the end of a heading.
*
* @name no-heading-punctuation
* @memberof rules
* @type {Array}
* @default [ 'error', '.,;:!?' ]
* @see [no-heading-punctuation]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-heading-punctuation}
*
* @example
* <!-- Bad -->
*
* ## Beep.
*
*/
rules[ 'no-heading-punctuation' ] = [ 'error', '.,;:!?' ];

/**
* Allow HTML.
*
* @name no-html
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [no-html]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-html}
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
rules[ 'no-html' ] = [ 'off' ];

/**
* Never allow inline padding.
*
* @name no-inline-padding
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-inline-padding]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-inline-padding}
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
rules[ 'no-inline-padding' ] = [ 'error' ];

/**
* Never allow literal URLs without angle brackets.
*
* @name no-literal-urls
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-literal-urls]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-literal-urls}
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
rules[ 'no-literal-urls' ] = [ 'error' ];

/**
* Require blank lines between block nodes.
*
* @name no-missing-blank-lines
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-missing-blank-lines]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-missing-blank-lines}
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
rules[ 'no-missing-blank-lines' ] = [ 'error' ];

/**
* Allow multiple top-level headings.
*
* @name no-multiple-toplevel-headings
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [no-multiple-toplevel-headings]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-multiple-toplevel-headings}
*
* @example
* <!-- Okay -->
*
* # Beep
*
* # Boop
*
*/
rules[ 'no-multiple-toplevel-headings' ] = [ 'off' ];

/**
* Never allow references to be used like URLs.
*
* @name no-reference-like-url
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-reference-like-url]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-reference-like-url}
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
rules[ 'no-reference-like-url' ] = [ 'error' ];

/**
* Allow shell commands to be prefixed with `$` symbols.
*
* @name no-shell-dollars
* @memberof rules
* @type {Array}
* @default [ 'off' ]
* @see [no-shell-dollars]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-shell-dollars}
*
* @example
* <!-- Okay -->
*
* ``` bash
* $ echo beep
* ```
*/
rules[ 'no-shell-dollars' ] = [ 'off' ];

/**
* Never allow shortcut reference images.
*
* @name no-shortcut-reference-image
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-shortcut-reference-image]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-shortcut-reference-image}
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
rules[ 'no-shortcut-reference-image' ] = [ 'error' ];

/**
* Never allow shortcut reference links.
*
* @name no-shortcut-reference-link
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-shortcut-reference-link]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-shortcut-reference-link}
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
rules[ 'no-shortcut-reference-link' ] = [ 'error' ];

/**
* Never allow table indentation.
*
* @name no-table-indentation
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-table-indentation]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-table-indentation}
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
rules[ 'no-table-indentation' ] = [ 'error' ];

/**
* Never allow the use of spaces.
*
* @name no-tabs
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-tabs]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-tabs}
*/
rules[ 'no-tabs' ] = [ 'error' ];

/**
* Never allow undefined references.
*
* @name no-undefined-references
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-undefined-references]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-undefined-references}
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
rules[ 'no-undefined-references' ] = [ 'error' ];

/**
* Never allow unused definitions.
*
* @name no-unused-definitions
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [no-unused-definitions]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#no-unused-definitions}
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
rules[ 'no-unused-definitions' ] = [ 'error' ];

/**
* Require ordered lists to use periods (e.g., `1.`, `2.`, etc).
*
* @name ordered-list-marker-style
* @memberof rules
* @type {Array}
* @default [ 'error', '.' ]
* @see [ordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#ordered-list-marker-style}
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
rules[ 'ordered-list-marker-style' ] = [ 'error', '.' ];

/**
* Prefer ordered, but allow discretion when determining appropriate ordered list marker value.
*
* @name ordered-list-marker-value
* @memberof rules
* @type {Array}
* @default [ 'off', 'ordered' ]
* @see [ordered-list-marker-value]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#ordered-list-marker-value}
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
rules[ 'ordered-list-marker-value' ] = [ 'off', 'ordered' ];

/**
* Require that the horizontal rule style be three consecutive dashes `---`.
*
* @name rule-style
* @memberof rules
* @type {Array}
* @default [ 'error', '---' ]
* @see [rule-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#rule-style}
*
* @example
* <!-- Bad -->
*
* * * *
*
* @example
* <!-- Good -->
*
* ---
*
*/
rules[ 'rule-style' ] = [ 'error', '---' ];

/**
* Set the strong marker to underscores.
*
* @name strong-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '_' ]
* @see [strong-marker]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#strong-marker}
*
* @example
* <!-- Bad -->
*
* **Beep**.
*
* @example
* <!-- Good -->
*
* __Beep__.
*
*/
rules[ 'strong-marker' ] = [ 'error', '_' ];

/**
* Require table padding.
*
* @name table-cell-padding
* @memberof rules
* @type {Array}
* @default [ 'error', 'padding' ]
* @see [table-cell-padding]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#table-cell-padding}
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
rules[ 'table-cell-padding' ] = [ 'error', 'padded' ];

/**
* Require table pipe alignment.
*
* @name table-pipe-alignment
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [table-pipe-alignment]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#table-pipe-alignment}
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
rules[ 'table-pipe-alignment' ] = [ 'error' ];

/**
* Require table rows to be fenced in table pipes.
*
* @name table-pipes
* @memberof rules
* @type {Array}
* @default [ 'error' ]
* @see [table-pipes]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#table-pipes}
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
rules[ 'table-pipes' ] = [ 'error' ];

/**
* Prefer that the unordered list marker be an asterisk `*`, but allow discretion to maximize clarity and readability.
*
* @name unordered-list-marker-style
* @memberof rules
* @type {Array}
* @default [ 'off', '*' ]
* @see [unordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/blob/master/doc/rules.md#unordered-list-marker-style}
*
* @example
* <!-- Okay -->
*
* * Beep
* * Boop
*
* @example
* <!-- Okay -->
*
* * Beep
*
*   - Foo
*   - Bar
*
* * Boop
*
*/
rules[ 'unordered-list-marker-style' ] = [ 'off', '*' ];


// EXPORTS //

module.exports = rules;
