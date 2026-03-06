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


// MAIN //

/**
* Returns an input prompt.
*
* @private
* @param {string} prompt - prompt string
* @param {integer} n - command number
* @returns {string} input prompt
*/
function inputPrompt( prompt, n ) {
	if ( n === -1 ) { // sentinel value
		n = 0;
	}
	n += 1;
	return replace( prompt, '%d', (n).toString() );
}


// EXPORTS //

module.exports = inputPrompt;
