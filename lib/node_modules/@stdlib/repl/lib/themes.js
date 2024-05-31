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
	'default': {
		// Keywords:
		'control': 'magenta',
		'keyword': 'blue',
		'specialIdentifier': 'cyan',

		// Literals:
		'string': 'brightYellow',
		'number': 'brightGreen',
		'literal': 'brightBlue',
		'regexp': 'red',

		// Identifiers:
		'command': 'brightMagenta',
		'function': 'yellow',
		'object': 'brightCyan',
		'variable': null,
		'name': null,

		// Others:
		'comment': 'brightBlack',
		'punctuation': null,
		'operator': null
	}
};


// EXPORTS //

module.exports = THEMES;
