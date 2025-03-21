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

// MAIN //

/**
* Object containing themes where each theme is an table mapping tokens to their respective colors.
*
* @private
* @name THEMES
* @type {Object}
*/
var THEMES = {
	'stdlib-ansi-basic': {
		// Keywords:
		'control': 'brightMagenta',
		'keyword': 'bold brightBlue',
		'specialIdentifier': 'cyan',

		// Literals:
		'string': 'green',
		'number': 'yellow',
		'literal': 'italic brightCyan',
		'regexp': 'underline brightRed',

		// Identifiers:
		'command': 'bold magenta',
		'function': 'bold yellow',
		'object': 'cyan',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'brightBlack',
		'punctuation': null,
		'operator': null
	},
	'stdlib-ansi-dark': {
		// Keywords:
		'control': 'bold brightMagenta',
		'keyword': 'green',
		'specialIdentifier': 'cyan',

		// Literals:
		'string': 'yellow',
		'number': 'brightBlue',
		'literal': 'italic brightCyan',
		'regexp': 'bold red',

		// Identifiers:
		'command': 'brightGreen',
		'function': 'bold magenta',
		'object': 'cyan',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'bold brightBlack',
		'punctuation': null,
		'operator': null
	},
	'stdlib-ansi-light': {
		// Keywords:
		'control': 'magenta',
		'keyword': 'blue',
		'specialIdentifier': 'bold cyan',

		// Literals:
		'string': 'yellow',
		'number': 'green',
		'literal': 'italic brightBlue',
		'regexp': 'underline red',

		// Identifiers:
		'command': 'brightMagenta',
		'function': 'yellow',
		'object': 'bold',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'brightBlack',
		'punctuation': null,
		'operator': null
	},
	'stdlib-ansi-strong': {
		// Keywords:
		'control': 'bold magenta',
		'keyword': 'bold blue',
		'specialIdentifier': 'italic cyan',

		// Literals:
		'string': 'bold brightGreen',
		'number': 'bold brightYellow',
		'literal': 'italic brightBlue',
		'regexp': 'underline red',

		// Identifiers:
		'command': 'underline brightBlue',
		'function': 'bold yellow',
		'object': 'italic cyan',
		'variable': 'green',
		'name': null,

		// Others:
		'comment': 'italic brightBlack',
		'punctuation': null,
		'operator': null
	},
	'minimalist': {
		// Keywords:
		'control': 'underline',
		'keyword': 'bold',
		'specialIdentifier': 'italic',

		// Literals:
		'string': 'underline',
		'number': 'bold',
		'literal': 'italic',
		'regexp': 'bold underline',

		// Identifiers:
		'command': 'underline bold',
		'function': 'italic bold',
		'object': 'italic',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'italic brightBlack',
		'punctuation': null,
		'operator': null
	},
	'solarized': {
		// Keywords:
		'control': 'green',
		'keyword': 'bold',
		'specialIdentifier': 'red',

		// Literals:
		'string': 'cyan',
		'number': 'brightMagenta',
		'literal': 'brightYellow',
		'regexp': 'red',

		// Identifiers:
		'command': 'bold magenta',
		'function': 'brightBlue',
		'object': 'brightRed',
		'variable': 'brightBlue',
		'name': null,

		// Others:
		'comment': 'italic brightBlack',
		'punctuation': null,
		'operator': 'green'
	},
	'monokai': {
		// Keywords:
		'control': 'brightRed',
		'keyword': 'italic brightCyan',
		'specialIdentifier': 'brightMagenta',

		// Literals:
		'string': 'brightYellow',
		'number': 'brightBlue',
		'literal': 'brightBlue',
		'regexp': 'underline yellow',

		// Identifiers:
		'command': 'bold brightGreen',
		'function': 'brightGreen',
		'object': 'italic brightMagenta',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'brightBlack',
		'punctuation': null,
		'operator': 'brightRed'
	}
};


// EXPORTS //

module.exports = THEMES;
