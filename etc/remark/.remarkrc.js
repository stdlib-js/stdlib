'use strict';

// MAIN //

var config = {};
var plugins = {};
var lint = {};
var vlinks = {};

config.plugins = plugins;

plugins[ 'lint' ] = lint;
plugins[ 'validate-links' ] = vlinks;

// Reset all rules:
lint[ 'reset' ] = true;

// Ensure consistent blockquote-indentation:
lint[ 'blockquote-indentation' ] = [ 'error', 2 ]; // characters

// Define the checkbox character style:
lint[ 'checkbox-character-style' ] = [ 'error', {
	'checked': 'x',
	'unchecked': ' '
}];

// Prevent checkboxes being followed by too much white-space:
lint[ 'checkbox-content-indent' ] = [ 'error' ];

// Require `fenced` code block style:
lint[ 'code-block-style' ] = [ 'error', 'fenced' ];

// Require lowercased definition labels:
lint[ 'definition-case' ] = [ 'error' ];

// Prevent consecutive whitespace in a definition:
lint[ 'definition-spacing' ] = [ 'error' ];

// Define the emphasis marker:
lint[ 'emphasis-marker' ] = [ 'error', '*' ];

// Require fenced code blocks to have a language flag:
lint[ 'fenced-code-flag' ] = [ 'error' ];

// Define the fenced code marker:
lint[ 'fenced-code-marker' ] = [ 'error', '`' ];

// Require a Markdown file to have the file extension `*.md`:
lint[ 'file-extension' ] = [ 'error', 'md' ];

// Require definitions be placed at the end of a file:
lint[ 'final-definition' ] = [ 'off' ]; // NOTE: we turn this off due to definitions being wrapped in HTML tags

// Require a final newline (see http://unix.stackexchange.com/questions/18743):
lint[ 'final-newline' ] = [ 'error' ];

// Specify a first heading level:
lint[ 'first-heading-level' ] = [ 'error', 1 ];

// Prevent too many spaces from being used to hard break:
lint[ 'hard-break-spaces' ] = [ 'error' ];

// Warn when headings increment by more than 1 level:
// lint[ 'heading-increment' ] = [ 'warn' ];

// Define the heading style:
lint[ 'heading-style' ] = [ 'error', 'atx' ];

// Require double quotes for link titles:
lint[ 'link-title-style' ] = [ 'error', '"' ];

// Prevent unnecessary indentation of list bullets:
lint[ 'list-item-bullet-indent' ] = [ 'error' ];

// Enforce consistent indentation of list items:
lint[ 'list-item-content-indent' ] = [ 'error' ];

// Require list items be indented using spaces:
lint[ 'list-item-indent' ] = [ 'error', 'space' ];

// Require consistent list item spacing:
lint[ 'list-item-spacing' ] = [ 'error' ];

// Enforce a maximum heading length:
lint[ 'maximum-heading-length' ] = [ 'error', 80 ]; // characters

// Do not enforce a maximum line length:
lint[ 'maximum-line-length' ] = [ 'off' ];

// Require a protocol for links:
lint[ 'no-auto-link-without-protocol' ] = [ 'error' ];

// Require caret in blockquotes:
lint[ 'no-blockquote-without-caret' ] = [ 'error' ];

// Allow consecutive blank lines:
lint[ 'no-consecutive-blank-lines' ] = [ 'off' ];

// Prevent duplicate definitions:
lint[ 'no-duplicate-definitions' ] = [ 'error' ];

// Prevent duplicate headings within a section:
lint[ 'no-duplicate-headings-in-section' ] = [ 'error' ];

// Allow duplicate headings:
lint[ 'no-duplicate-headings' ] = [ 'off' ];

// Prevent emphasis being used as a heading:
lint[ 'no-emphasis-as-heading' ] = [ 'error' ];

// Prevent empty URLs in images and links:
lint[ 'no-empty-url' ] = [ 'error' ];

// Prevent filenames beginning with an article:
lint[ 'no-file-name-articles' ] = [ 'error' ];

// Prevent consecutive dashes in filenames:
lint[ 'no-file-name-consecutive-dashes' ] = [ 'error' ];

// Prevent irregular characters in filenames:
lint[ 'no-file-name-irregular-characters' ] = [ 'error', '\\.a-zA-Z0-9-_' ];

// Prevent mixed case filenames:
lint[ 'no-file-name-mixed-case' ] = [ 'error' ];

// Prevent filenames beginning or ending with dashes:
lint[ 'no-file-name-outer-dashes' ] = [ 'error' ];

// Prevent heading content indentation:
lint[ 'no-heading-content-indent' ] = [ 'error' ];

// Prevent heading indentation:
lint[ 'no-heading-indent' ] = [ 'error' ];

// Prevent h7+ "headings":
lint[ 'no-heading-like-paragraph' ] = [ 'error' ];

// Prevent punctuation at the end of a heading:
lint[ 'no-heading-punctuation' ] = [ 'error' ];

// Allow HTML:
lint[ 'no-html' ] = [ 'off' ];

// Prevent inline padding:
lint[ 'no-inline-padding' ] = [ 'error' ];

// Prevent literal URLs (require angle brackets):
lint[ 'no-literal-urls' ] = [ 'error' ];

// Require blank lines between nodes:
lint[ 'no-missing-blank-lines' ] = [ 'error' ];

// Allow multiple top-level headings:
lint[ 'no-multiple-toplevel-headings' ] = [ 'off' ];

// Do not allow references to be used like URLs:
lint[ 'no-reference-like-url' ] = [ 'error' ];

// Allow shell commands to be prefixed with `$` symbols:
lint[ 'no-shell-dollars' ] = [ 'off' ];

// Prohibit shortcut reference images:
lint[ 'no-shortcut-reference-image' ] = [ 'error' ];

// Prevent shortcut reference links:
lint[ 'no-shortcut-reference-link' ] = [ 'error' ];

// Prevent table indentation:
lint[ 'no-table-indentation' ] = [ 'error' ];

// Require the use of spaces:
lint[ 'no-tabs' ] = [ 'error' ];

// Prohibit undefined references:
lint[ 'no-undefined-references' ] = [ 'error' ];

// Require all definitions be used:
lint[ 'no-unused-definitions' ] = [ 'error' ];

// Require ordered lists to use periods (e.g., `1.`, `2.`, etc):
lint[ 'ordered-list-marker-style' ] = [ 'error', '.' ];

// Define the ordered list style:
// lint[ 'ordered-list-marker-value' ] = [ 'error', 'ordered' ];

// Define the horizontal rule style:
lint[ 'rule-style' ] = [ 'error', '---' ];

// Define the strong marker:
lint[ 'strong-marker' ] = [ 'error', '_' ];

// Require table padding:
lint[ 'table-cell-padding' ] = [ 'error', 'padded' ];

// Require table pipe alignment:
lint[ 'table-pipe-alignment' ] = [ 'error' ];

// Require table rows to be fenced in table pipes:
lint[ 'table-pipes' ] = [ 'error' ];

// Define the unordered list marker style:
// lint[ 'unordered-list-marker-style' ] = [ 'error', 'consistent' ];


// Validate links:
vlinks[ 'repository' ] = '';


// EXPORTS //

module.exports = config;
