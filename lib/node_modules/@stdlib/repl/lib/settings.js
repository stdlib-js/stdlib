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
* REPL settings.
*
* @private
* @name SETTINGS
* @type {Object}
*/
var SETTINGS = {
	'autoClosePairs': {
		'desc': 'Automatically insert matching brackets, parentheses, and quotes.',
		'type': 'boolean'
	},
	'autoDeletePairs': {
		'desc': 'Automatically delete adjacent matching brackets, parentheses, and quotes.',
		'type': 'boolean'
	},
	'autoPage': {
		'desc': 'Automatically page return values whose display size exceeds the visible screen.',
		'type': 'boolean'
	},
	'bracketedPaste': {
		'desc': 'Enable bracketed-paste mode.',
		'type': 'boolean'
	},
	'completionPreviews': {
		'desc': 'Enable the display of completion previews for auto-completion.',
		'type': 'boolean'
	},
	'autoDisableBracketedPasteOnExit': {
		'desc': 'Automatically disable bracketed-paste upon exiting the REPL.',
		'type': 'boolean'
	},
	'syntaxHighlighting': {
		'desc': 'Enable syntax highlighting.',
		'type': 'boolean'
	},
	'eagerEvaluation': {
		'desc': 'Enable eager evaluation.',
		'type': 'boolean'
	},
	'theme': {
		'desc': 'Set the syntax highlighting theme.',
		'type': 'string'
	}
};


// EXPORTS //

module.exports = SETTINGS;
