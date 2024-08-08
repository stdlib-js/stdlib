/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isComplex64 = require( '@stdlib/assert/is-complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Converts an array of complex number objects to a interleaved strided array.
*
* @private
* @param {Array<ComplexLike>} arr - input array
* @returns {Array<number>} output array
*/
function toStrided( arr ) {
	var out;
	var z;
	var i;

	out = [];
	for ( i = 0; i < arr.length; i++ ) {
		z = arr[ i ];
		if ( isComplex64( z ) ) {
			out.push( realf( z ), imagf( z ) );
		} else {
			out.push( real( z ), imag( z ) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = toStrided;
