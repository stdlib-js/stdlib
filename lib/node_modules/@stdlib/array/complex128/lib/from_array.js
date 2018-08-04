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

var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );


// MAIN //

/**
* Returns a strided array of real and imaginary components.
*
* @private
* @param {Float64Array} buf - output array
* @param {Array} arr - array containing complex numbers
* @returns {(Float64Array|null)} output array or null
*/
function fromArray( buf, arr ) {
	var len;
	var v;
	var i;
	var j;

	len = arr.length;
	j = 0;
	for ( i = 0; i < len; i++ ) {
		v = arr[ i ];
		if ( !isComplexLike( v ) ) {
			return null;
		}
		buf[ j ] = real( v );
		buf[ j+1 ] = imag( v );
		j += 2; // stride
	}
	return buf;
}


// EXPORTS //

module.exports = fromArray;
