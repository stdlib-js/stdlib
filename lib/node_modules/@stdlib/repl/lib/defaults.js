/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// MODULES //

var stdin = require( '@stdlib/streams/node/stdin' );
var stdout = require( '@stdlib/streams/node/stdout' );
var DEFAULT_KEYBINDINGS = require( './default_keybindings.js' );
var WELCOME = require( './welcome_text.js' );


// MAIN //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*
* @example
* var opts = defaults();
* // returns {...}
*/
function defaults() {
	return {
		// Default input stream:
		'input': stdin,

		// Default output stream:
		'output': stdout,

		// Input prompt:
		'inputPrompt': 'In [%d]: ',

		// Output prompt:
		'outputPrompt': 'Out[%d]: ',

		// Number of empty lines between successive commands:
		'padding': 1,

		// Flag indicating whether the input and output streams should be treated like a TTY (terminal) and whether the REPL should use ANSI/VT100 escape codes when writing to the output stream:
		'isTTY': void 0,

		// Number of milliseconds to execute a command before terminating execution:
		'timeout': 4294967295,

		// Flag indicating whether to run a REPL in a sandboxed context:
		'sandbox': true,

		// Welcome message:
		'welcome': WELCOME,

		// File path specifying where to save REPL command history:
		'save': '',

		// File path specifying a JavaScript file to load and evaluate line-by-line (e.g., a previous REPL history file):
		'load': '',

		// File path specifying where to save REPL commands and printed output:
		'log': '',

		// Flag indicating whether log information, confirmation messages, and other possible REPL diagnostics should be silenced:
		'quiet': false,

		// REPL keybindings:
		'keybindings': DEFAULT_KEYBINDINGS,

		// User settings:
		'settings': {
			// Flag indicating whether to automatically insert matching brackets, parentheses, and quotes:
			'autoClosePairs': true,

			// Flag indicating whether to automatically delete adjacent matching brackets, parentheses, and quotes:
			'autoDeletePairs': true,

			// Flag indicating whether to enable automatically page return values requiring a display size exceeding the visible screen (note: default depends on whether TTY):
			'autoPage': void 0,

			// Flag indicating whether to enable bracketed-paste mode (note: default depends on whether TTY):
			'bracketedPaste': void 0,

			// Flag indicating whether to enable the display of completion previews for auto-completion (note: default depends on whether TTY):
			'completionPreviews': void 0,

			// Flag indicating whether to automatically disable bracketed-paste upon exiting the REPL (note: default depends on whether TTY):
			'autoDisableBracketedPasteOnExit': void 0,

			// Flag indicating whether to enable syntax highlighting (note: default depends on whether TTY):
			'syntaxHighlighting': void 0,

			// Theme for syntax highlighting:
			'theme': 'stdlib-ansi-basic',

			// Flag indicating whether to enable eager evaluation (note: default depends on whether TTY):
			'eagerEvaluation': void 0
		}
	};
}


// EXPORTS //

module.exports = defaults;
