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

var replace = require( '@stdlib/string/replace' );
var FS_ALIASES = require( './fs_aliases.js' );


// MAIN //

/**
* Returns a regular expression for matching file system APIs.
*
* ## Notes
*
* -   Example output:
*
*     ```text
*     /\b(?:(exists|exists\.sync|readFile|readFile\.sync|readJSON|readJSON\.sync|readWASM|readWASM\.sync)\s*\(\s*(.*,\s*)*(?:\[\s*(?:[^\]]*,\s*)*)?['"]([^'"]*))$/
*     ```
*
* @private
* @returns {RegExp} regular expression
*/
function createRegExp() {
	var re;
	var N;
	var M;
	var i;

	N = FS_ALIASES.length;
	M = N - 1;
	re = '';

	// Match a word boundary:
	re += '\\b';

	// Create a capture group for detecting a file system alias with an incomplete invocation (e.g., `readFile.sync( './foo/bar`):
	re += '(?:';

	// Create a capture group for matching the file system alias...
	re += '(';
	for ( i = 0; i < N; i++ ) {
		// Append the alias, making sure to escape periods (e.g., `readFile.sync` => `readFile\.sync`):
		re += replace( FS_ALIASES[i][0], '.', '\\.' );

		// Separate aliases with an OR separator:
		if ( i < M ) {
			re += '|';
		}
	}
	// Close the file system alias capture group:
	re += ')';

	// Match zero or more whitespace characters after the alias:
	re += '\\s*';

	// Match an opening parenthesis literal:
	re += '\\(';

	// Match zero or more whitespace characters after the opening parenthesis:
	re += '\\s*';

	// Capture provided (comma-separated) arguments which precede the last argument:
	re += '(.*,\\s*)*';

	// Capture, but don't remember, an incomplete array argument (including all items except for the last) which occurs zero or one time:
	re += '(?:\\[\\s*(?:[^\\]]*,\\s*)*)?';

	// Match either a `'` or `"` literal:
	re += '[\'"]';

	// Capture the last (incomplete) path argument (or array item):
	re += '([^\'"]*)';

	// Close the incomplete invocation capture group:
	re += ')';

	// Match the end of input (i.e., ensure that the match is an incomplete invocation):
	re += '$';

	// Return the regular expression:
	return new RegExp( re );
}


// EXPORTS //

module.exports = createRegExp;
