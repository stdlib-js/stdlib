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

// Ensure consistent blockquote-indentation:
rules[ 'blockquote-indentation' ] = [ 'error', 2 ]; // characters

// Define the checkbox character style:
rules[ 'checkbox-character-style' ] = [ 'error', {
	'checked': 'x',
	'unchecked': ' '
}];

// Prevent checkboxes being followed by too much white-space:
rules[ 'checkbox-content-indent' ] = [ 'error' ];

// Require `fenced` code block style:
rules[ 'code-block-style' ] = [ 'error', 'fenced' ];

// Require lowercased definition labels:
rules[ 'definition-case' ] = [ 'error' ];

// Prevent consecutive whitespace in a definition:
rules[ 'definition-spacing' ] = [ 'error' ];

// Define the emphasis marker:
rules[ 'emphasis-marker' ] = [ 'error', '*' ];

// Require fenced code blocks to have a language flag:
rules[ 'fenced-code-flag' ] = [ 'error' ];

// Define the fenced code marker:
rules[ 'fenced-code-marker' ] = [ 'error', '`' ];

// Require a Markdown file to have the file extension `*.md`:
rules[ 'file-extension' ] = [ 'error', 'md' ];

// Require definitions be placed at the end of a file:
rules[ 'final-definition' ] = [ 'off' ]; // NOTE: we turn this off due to definitions being wrapped in HTML tags

// Require a final newline (see http://unix.stackexchange.com/questions/18743):
rules[ 'final-newline' ] = [ 'error' ];

// Specify a first heading level:
rules[ 'first-heading-level' ] = [ 'error', 1 ];

// Prevent too many spaces from being used to hard break:
rules[ 'hard-break-spaces' ] = [ 'error' ];

// Warn when headings increment by more than 1 level:
// rules[ 'heading-increment' ] = [ 'warn' ];

// Define the heading style:
rules[ 'heading-style' ] = [ 'error', 'atx' ];

// Require double quotes for link titles:
rules[ 'link-title-style' ] = [ 'error', '"' ];

// Prevent unnecessary indentation of list bullets:
rules[ 'list-item-bullet-indent' ] = [ 'error' ];

// Enforce consistent indentation of list items:
rules[ 'list-item-content-indent' ] = [ 'error' ];

// Require list items be indented using spaces:
rules[ 'list-item-indent' ] = [ 'error', 'space' ];

// Require consistent list item spacing:
rules[ 'list-item-spacing' ] = [ 'error' ];

// Enforce a maximum heading length:
rules[ 'maximum-heading-length' ] = [ 'error', 80 ]; // characters

// Do not enforce a maximum line length:
rules[ 'maximum-line-length' ] = [ 'off' ];

// Require a protocol for links:
rules[ 'no-auto-link-without-protocol' ] = [ 'error' ];

// Require caret in blockquotes:
rules[ 'no-blockquote-without-caret' ] = [ 'error' ];

// Allow consecutive blank lines:
rules[ 'no-consecutive-blank-lines' ] = [ 'off' ];

// Prevent duplicate definitions:
rules[ 'no-duplicate-definitions' ] = [ 'error' ];

// Prevent duplicate headings within a section:
rules[ 'no-duplicate-headings-in-section' ] = [ 'error' ];

// Allow duplicate headings:
rules[ 'no-duplicate-headings' ] = [ 'off' ];

// Prevent emphasis being used as a heading:
rules[ 'no-emphasis-as-heading' ] = [ 'error' ];

// Prevent empty URLs in images and links:
rules[ 'no-empty-url' ] = [ 'error' ];

// Prevent filenames beginning with an article:
rules[ 'no-file-name-articles' ] = [ 'error' ];

// Prevent consecutive dashes in filenames:
rules[ 'no-file-name-consecutive-dashes' ] = [ 'error' ];

// Prevent irregular characters in filenames:
rules[ 'no-file-name-irregular-characters' ] = [ 'error', '\\.a-zA-Z0-9-_' ];

// Prevent mixed case filenames:
rules[ 'no-file-name-mixed-case' ] = [ 'error' ];

// Prevent filenames beginning or ending with dashes:
rules[ 'no-file-name-outer-dashes' ] = [ 'error' ];

// Prevent heading content indentation:
rules[ 'no-heading-content-indent' ] = [ 'error' ];

// Prevent heading indentation:
rules[ 'no-heading-indent' ] = [ 'error' ];

// Prevent h7+ "headings":
rules[ 'no-heading-like-paragraph' ] = [ 'error' ];

// Prevent punctuation at the end of a heading:
rules[ 'no-heading-punctuation' ] = [ 'error' ];

// Allow HTML:
rules[ 'no-html' ] = [ 'off' ];

// Prevent inline padding:
rules[ 'no-inline-padding' ] = [ 'error' ];

// Prevent literal URLs (require angle brackets):
rules[ 'no-literal-urls' ] = [ 'error' ];

// Require blank lines between nodes:
rules[ 'no-missing-blank-lines' ] = [ 'error' ];

// Allow multiple top-level headings:
rules[ 'no-multiple-toplevel-headings' ] = [ 'off' ];

// Do not allow references to be used like URLs:
rules[ 'no-reference-like-url' ] = [ 'error' ];

// Allow shell commands to be prefixed with `$` symbols:
rules[ 'no-shell-dollars' ] = [ 'off' ];

// Prohibit shortcut reference images:
rules[ 'no-shortcut-reference-image' ] = [ 'error' ];

// Prevent shortcut reference links:
rules[ 'no-shortcut-reference-link' ] = [ 'error' ];

// Prevent table indentation:
rules[ 'no-table-indentation' ] = [ 'error' ];

// Require the use of spaces:
rules[ 'no-tabs' ] = [ 'error' ];

// Prohibit undefined references:
rules[ 'no-undefined-references' ] = [ 'error' ];

// Require all definitions be used:
rules[ 'no-unused-definitions' ] = [ 'error' ];

// Require ordered lists to use periods (e.g., `1.`, `2.`, etc):
rules[ 'ordered-list-marker-style' ] = [ 'error', '.' ];

// Define the ordered list style:
// rules[ 'ordered-list-marker-value' ] = [ 'error', 'ordered' ];

// Define the horizontal rule style:
rules[ 'rule-style' ] = [ 'error', '---' ];

// Define the strong marker:
rules[ 'strong-marker' ] = [ 'error', '_' ];

// Require table padding:
rules[ 'table-cell-padding' ] = [ 'error', 'padded' ];

// Require table pipe alignment:
rules[ 'table-pipe-alignment' ] = [ 'error' ];

// Require table rows to be fenced in table pipes:
rules[ 'table-pipes' ] = [ 'error' ];

// Define the unordered list marker style:
// rules[ 'unordered-list-marker-style' ] = [ 'error', 'consistent' ];


// EXPORTS //

module.exports = rules;
