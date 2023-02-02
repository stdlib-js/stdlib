/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Processes a string of decimal numbers and applies a function mapping decimal numbers to words to each character.
*
* @private
* @param {string} x - string of decimal numbers
* @param {Function} fcn - function mapping decimal numbers to words
* @returns {string} string of words
*/
function decimals( x, fcn ) {
	var out;
	var len;
	var i;

	len = x.length;
	out = '';
	for ( i = 0; i < len; i++ ) {
		out += fcn( x[ i ], '' );
		if ( i < len-1 ) {
			out += ' ';
		}
	}
	return out;
}


// EXPORTS //

module.exports = decimals;
