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
* Table mapping generic color names to their ANSI color codes.
*
* @private
* @name ANSI
* @type {Object}
*/
var ANSI = {
	// Original colors:
	'black': '\u001b[30m',
	'red': '\u001b[31m',
	'green': '\u001b[32m',
	'yellow': '\u001b[33m',
	'blue': '\u001b[34m',
	'magenta': '\u001b[35m',
	'cyan': '\u001b[36m',
	'white': '\u001b[37m',

	// Bright colors:
	'brightBlack': '\u001b[90m',
	'brightRed': '\u001b[91m',
	'brightGreen': '\u001b[92m',
	'brightYellow': '\u001b[93m',
	'brightBlue': '\u001b[94m',
	'brightMagenta': '\u001b[95m',
	'brightCyan': '\u001b[96m',
	'brightWhite': '\u001b[97m',

	// Background colors:
	'bgBlack': '\u001b[40m',
	'bgRed': '\u001b[41m',
	'bgGreen': '\u001b[42m',
	'bgYellow': '\u001b[43m',
	'bgBlue': '\u001b[44m',
	'bgMagenta': '\u001b[45m',
	'bgCyan': '\u001b[46m',
	'bgWhite': '\u001b[47m',

	// Bright background colors:
	'bgBrightBlack': '\u001b[100m',
	'bgBrightRed': '\u001b[101m',
	'bgBrightGreen': '\u001b[102m',
	'bgBrightYellow': '\u001b[103m',
	'bgBrightBlue': '\u001b[104m',
	'bgBrightMagenta': '\u001b[105m',
	'bgBrightCyan': '\u001b[106m',
	'bgBrightWhite': '\u001b[107m',

	// Styles:
	'bold': '\u001b[1m',
	'underline': '\u001b[4m',
	'reversed': '\u001b[7m',
	'italic': '\u001b[3m',
	'strikethrough': '\u001b[9m',

	// Reset colors:
	'reset': '\u001b[0m'
};


// EXPORTS //

module.exports = ANSI;
