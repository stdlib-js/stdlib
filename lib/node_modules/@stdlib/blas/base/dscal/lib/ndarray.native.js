/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './dscal.native.js' );


// MAIN //

/**
* Multiplies a vector `x` by a scalar `alpha`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Float64Array} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
* var alpha = 5.0;
*
* dscal( 3, alpha, x, 1, x.length-3 );
* // x => <Float64Array>[ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
*/
function dscal( N, alpha, x, stride, offset ) {
	var view;
	if ( stride < 0 ) {
		stride *= -1;
		offset -= (N-1) * stride;
	}
	view = new Float64Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offset), x.length-offset ); // eslint-disable-line max-len
	addon( N, alpha, view, stride );
	return x;
}


// EXPORTS //

module.exports = dscal;
