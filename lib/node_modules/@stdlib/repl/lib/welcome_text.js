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

var MSG = [
	'     _      _ _ _ _',
	' ___| |_ __| | (_) |__    |  A better REPL for JavaScript and Node.js.',
	'/ __| __/ _` | | | \'_ \\   |',
	'\\__ \\ || (_| | | | |_) |  |  For more info, see the source repository:',
	'|___/\\__\\__,_|_|_|_.__/   |  https://github.com/stdlib-js/stdlib',
	'',

	// TODO: include platform, copyright, version (see Julia, R, and Python for inspiration)
	'',
	'    help()                  Print help text.',
	'    help(alias)             Print help text for a specified alias.',
	'    help(alias.<key>)       Print help text for a specified property.',
	'',
	'    example(alias)          Run examples for a specified alias.',
	'    example(alias.<key>)    Run examples for a specified property.',
	'',
	'    reset()                 Reset the REPL.',
	'    quit()                  Exit the REPL.',
	'',
	'    license()               Print license information.',
	'    copyright()             Print copyright information.',
	'',
	''
].join( '\n' );


// EXPORTS //

module.exports = MSG;
