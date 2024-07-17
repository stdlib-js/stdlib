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
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var format = require( '@stdlib/string/format' );


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
	var z;

	out = [];
	while ( true ) {
		v = it.next();
		if ( v.done ) {
			break;
		}
		z = v.value;
		if ( isArrayLikeObject( z ) && z.length >= 2 ) {
			out.push( z[ 0 ], z[ 1 ] );
		} else if ( isComplexLike( z ) ) {
			out.push( realf( z ), imagf( z ) );
		} else {
			return new TypeError( format( 'invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.', z ) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = fromIterator;
