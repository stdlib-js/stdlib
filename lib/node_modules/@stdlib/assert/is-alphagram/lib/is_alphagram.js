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

var isString = require( '@stdlib/assert/is-string' );


// MAIN //

/**
* Tests if a value is an alphagram.
*
* @param {*} x - value to test
* @returns {boolean} boolean indicating if a value is an alphagram
*
* @example
* var out = isAlphagram( 'beep' );
* // returns true
*
* @example
* var out = isAlphagram( new String( 'beep' ) );
* // returns true
*
* @example
* var out = isAlphagram( 'zba' );
* // returns false
*
* @example
* var out = isAlphagram( '' );
* // returns false
*
* @example
* var out = isAlphagram( 123 );
* // returns false
*/
function isAlphagram( x ) {
	var len;
	var i;

	if ( !isString( x ) ) {
		return false;
	}
	len = x.length;
	if ( !len ) {
		return false;
	}
	for ( i = 1; i < len; i++ ) {
		if ( x[ i-1 ] > x[ i ] ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = isAlphagram;
