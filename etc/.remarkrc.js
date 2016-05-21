'use strict';

// CONFIG //

var config = {};
var plugins = {};
var lint = {};

config.plugins = plugins;
plugins.lint = lint;


// LINT RULES //

// Reset all rules:
lint[ 'reset' ] = true;

// Ensure consistent blockquote-indentation:
lint[ 'blockquote-indentation' ] = 2; // characters

// Define the checkbox character style:
lint[ 'checkbox-character-style' ] = {
	'checked': 'x',
	'unchecked': ''
};

// Prevent checkboxes being followed by too much white-space:
lint[ 'checkbox-content-indent' ] = true;

// Require `fenced` code block style:
lint[ 'code-block-style' ] = 'fenced';

// Require lowercased definition labels:
lint[ 'definition-case' ] = true;

// Prevent consecutive whitespace in a definition:
lint[ 'definition-spacing' ] = true;

// Define the emphasis marker:
lint[ 'emphasis-marker' ] = '*';

// Require fenced code blocks to have a language flag:
lint[ 'fenced-code-flag' ] = true;

// Define the fenced code marker:
lint[ 'fenced-code-marker' ] = '`';

// Require a Markdown file to have the file extension `*.md`:
lint[ 'file-extension' ] = 'md';

// Require definitions be placed at the end of a file:
lint[ 'final-definition' ] = true;

// Require a final newline (see http://unix.stackexchange.com/questions/18743):
lint[ 'final-newline' ] = true;

// Specify a first heading level:
// lint[ 'first-heading-level' ] = 2;

// Prevent too many spaces from being used to hard break:
lint[ 'hard-break-spaces' ] = true;

// Warn when headings increment by more than 1 level:
// lint[ 'heading-increment' ] = true;

// Define the heading style:
// lint[ 'heading-style' ] = 'atx';

// Require double quotes for link titles:
lint[ 'link-title-style' ] = '"';

// Prevent unnecessary indentation of list bullets:
lint[ 'list-item-bullet-indent' ] = true;

// Enforce consistent indentation of list items:
lint[ 'list-item-content-indent' ] = true;

// Require list items be indented using spaces:
lint[ 'list-item-indent' ] = 'space';

// Require consistent list item spacing:
lint[ 'list-item-spacing' ] = true;

// Enforce a maximum heading length:
lint[ 'maximum-heading-length' ] = 80; // characters

// Enforce a maximum line length:
lint[ 'maximum-line-length' ] = false;

// Require a protocol for links:
lint[ 'no-auto-link-without-protocol' ] = true;

// Require caret in blockquotes:
lint[ 'no-blockquote-without-caret' ] = true;

// Allow consecutive blank lines:
lint[ 'no-consecutive-blank-lines' ] = false;

// Prevent duplicate definitions:
lint[ 'no-duplicate-definitions' ] = true;

// Prevent duplicate headings:
lint[ 'no-duplicate-headings' ] = true;

// Prevent emphasis being used as a heading:
lint[ 'no-emphasis-as-heading' ] = true;

// Prevent filenames beginning with an article:
lint[ 'no-file-name-articles' ] = true;

// Prevent consecutive dashes in filenames:
lint[ 'no-file-name-consecutive-dashes' ] = true;

// Prevent irregular characters in filenames:
lint[ 'no-file-name-irregular-characters' ] = true; // NOTE: possibly not, as this excludes underscores

// Prevent mixed case filenames:
lint[ 'no-file-name-mixed-case' ] = true;

// Prevent filenames beginning or ending with dashes:
lint[ 'no-file-name-outer-dashes' ] = true;

// Prevent heading content indentation:
lint[ 'no-heading-content-indent' ] = true;

// Prevent heading indentation:
lint[ 'no-heading-indent' ] = true;

// Prevent punctuation at the end of a heading:
lint[ 'no-heading-punctuation' ] = true;

// Allow HTML:
lint[ 'no-html' ] = false;

// Prevent inline padding:
lint[ 'no-inline-padding' ] = true;

// Prevent literal URLs (require angle brackets):
lint[ 'no-literal-urls' ] = true;

// Require blank lines between nodes:
lint[ 'no-missing-blank-lines' ] = true;

// Allow multiple top-level headings:
lint[ 'no-multiple-toplevel-headings' ] = false;

// Allow shell commands to be prefixed with `$` symbols:
lint[ 'no-shell-dollars' ] = false;

// Prohibit shortcut reference images:
lint[ 'no-shortcut-reference-image' ] = true;

// Require a shortcut reference link:
lint[ 'no-shortcut-reference-link' ] = true;

// Prevent table indentation:
lint[ 'no-table-indentation' ] = true;

// Require the use of spaces:
lint[ 'no-tabs' ] = true;

// Prohibit undefined references:
lint[ 'no-undefined-references' ] = true;

// Require all definitions be used:
lint[ 'no-unused-definitions' ] = true;

// Require ordered lists to use periods:
lint[ 'ordered-list-marker-style' ] = '.';

// Define the ordered list style:
// lint[ 'ordered-list-marker-value' ] = 'ordered';

// Define the horizontal rule style:
lint[ 'rule-style' ] = '___';

// Define the strong marker:
lint[ 'strong-marker' ] = '_';

// Require table padding:
lint[ 'table-cell-padding' ] = 'padded';

// Require table pipe alignment:
lint[ 'table-pipe-alignment' ] = true;

// Define the unordered list marker style:
// lint[ 'unordered-list-marker-style' ] = 'consistent';


// EXPORTS //

module.exports = config;
