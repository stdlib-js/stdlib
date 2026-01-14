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
* Converts a Slice object to a subsequence string.
*
* @param {Slice} slice - slice object
* @returns {string} subsequence string
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var str = slice2seq( new Slice( null, null, null ) );
* // returns ':'
*
* str = slice2seq( new Slice() );
* // returns ':'
*
* str = slice2seq( new Slice( null ) );
* // returns ':'
*
* str = slice2seq( new Slice( 10 ) );
* // returns ':10'
*
* str = slice2seq( new Slice( -1 ) );
* // returns ':-1'
*
* str = slice2seq( new Slice( 2, 10 ) );
* // returns '2:10'
*
* str = slice2seq( new Slice( -2, 10 ) );
* // returns '-2:10'
*
* str = slice2seq( new Slice( -2, -10 ) );
* // returns '-2:-10'
*
* str = slice2seq( new Slice( 2, null ) );
* // returns '2:'
*
* str = slice2seq( new Slice( null, 10 ) );
* // returns ':10'
*
* str = slice2seq( new Slice( 2, 10, 2 ) );
* // returns '2:10:2'
*
* str = slice2seq( new Slice( -1, null, -1 ) );
* // returns '-1::-1'
*
* str = slice2seq( new Slice( -1, -5, -1 ) );
* // returns '-1:-5:-1'
*
* str = slice2seq( new Slice( -1, 10, -1 ) );
* // returns '-1:10:-1'
*
* str = slice2seq( new Slice( 1, -1, 2 ) );
* // returns '1:-1:2'
*
* str = slice2seq( new Slice( null, null, -1 ) );
* // returns '::-1'
*/
function slice2seq( slice ) {
	var out;
	var i;
	var j;
	var k;

	i = slice.start;
	j = slice.stop;
	k = slice.step;

	if ( i === null ) {
		out = '';
	} else {
		out = String( i );
	}
	if ( j === null ) {
		if ( k === null ) {
			return out + ':';    // e.g., ':', '2:', '-1:'
		}
		if ( out === '' ) {
			return '::' + k;     // e.g., '::2', '::-1'
		}
		return out + '::' + k;   // e.g., '1::2', '10::-1'
	}
	out += ':' + j;
	if ( k === null ) {
		return out;              // e.g., ':10', ':-1'
	}
	return out + ':' + k;        // e.g., ':10:2', ':-1:-1', '1:10:2', '10:2:-1', '-1:-5:-1'
}


// EXPORTS //

module.exports = slice2seq;
