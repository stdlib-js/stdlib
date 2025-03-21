/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var ENV = require( '@stdlib/process/env' );


// VARIABLES //

// Match a trailing slash...
var RE;
if ( IS_WINDOWS ) {
	RE = /[^:]\\$/;
} else {
	RE = /.\/$/;
}


// MAIN //

/**
* Returns the directory for storing temporary files.
*
* ## Notes
*
* -   Introduced in io.js and Node v4. See the [ES5][1] and [ES6][2].
*
* [1]: https://github.com/nodejs/node/blob/9cd44bb2b683446531306bbcff8739fc3526d02c/lib/os.js#L31
* [2]: https://github.com/nodejs/node/blob/5e5ec2cd1ee875ec5c837b5e0721d73628f12053/lib/os.js#L40
*
* @returns {string} directory for temporary files
*
* @example
* var dir = tmpdir();
* // e.g., returns '/path/to/temporary/files/directory'
*/
function tmpdir() {
	var tmp;
	if ( IS_WINDOWS ) {
		tmp = ENV.TEMP ||
			ENV.TMP ||
			(ENV.SystemRoot || ENV.windir || '') + '\\temp';
	} else {
		tmp = ENV.TMPDIR ||
			ENV.TMP ||
			ENV.TEMP ||
			'/tmp';
	}
	if ( RE.test( tmp ) ) {
		tmp = tmp.slice( 0, -1 );
	}
	return tmp;
}


// EXPORTS //

module.exports = tmpdir;
