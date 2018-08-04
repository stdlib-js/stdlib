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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );


// MAIN //

/**
* Returns an array of iterated values.
*
* @private
* @param {Object} it - iterator
* @returns {(Array|TypeError)} array or an error
*/
function fromIterator( it ) {
	var out;
	var v;

	out = [];
	while ( true ) {
		v = it.next();
		if ( v.value ) {
			if ( isArrayLikeObject( v.value ) ) {
				out.push( v.value[0], v.value[1] );
			} else if ( isComplexLike( v.value ) ) {
				out.push( real( v.value ), imag( v.value ) );
			} else {
				return new TypeError( 'invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `'+v.value+'`.' );
			}
		}
		if ( v.done ) {
			break;
		}
	}
	return out;
}


// EXPORTS //

module.exports = fromIterator;
