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

// MAIN //

/*
* [ANSI escape sequences][1]:
*
* -   `\u001b`: ESC, the escape character
* -   `[X`: color code
*
* [1]: https://en.wikipedia.org/wiki/ANSI_escape_code
*/
var ANSI_ESCAPE_CODES = {
	// NOTE: keep in alphabetical order...
	'BLACK': '\u001b[30m',     // foreground color for ANSI black
	'BLACK_B': '\u001b[40m',   // background color ANSI black
	'BLUE': '\u001b[34m',      // foreground color for ANSI blue
	'BLUE_B': '\u001b[44m',    // background color for ANSI blue
	'BOLD': '\u001b[1m',       // ANSI bold
	'CYAN': '\u001b[36m',      // foreground color for ANSI cyan
	'CYAN_B': '\u001b[46m',    // background color for ANSI cyan
	'GREEN': '\u001b[32m',     // foreground color for ANSI green
	'GREEN_B': '\u001b[42m',   // background color for ANSI green
	'MAGENTA': '\u001b[35m',   // foreground color for ANSI magenta
	'MAGENTA_B': '\u001b[45m', // background color for ANSI magenta
	'RED': '\u001b[31m',       // foreground color for ANSI red
	'RED_B': '\u001b[41m',     // background color for ANSI red
	'RESET': '\u001b[0m',      // ANSI reset
	'REVERSED': '\u001b[7m',   // ANSI reversed
	'UNDERLINED': '\u001b[4m', // ANSI underline
	'WHITE': '\u001b[37m',     // foreground color for ANSI white
	'WHITE_B': '\u001b[47m',   // background color for ANSI white
	'YELLOW': '\u001b[33m',    // foreground color for ANSI yellow
	'YELLOW_B': '\u001b[43m'   // background color for ANSI yellow
};


// EXPORTS //

module.exports = ANSI_ESCAPE_CODES;
