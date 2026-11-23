/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Replaces strided array elements equal to `NaN` with a specified scalar constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {*} alpha - scalar constant
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Collection} input array
*
* @example
* var x = [ NaN, -2.0, 3.0, NaN, 5.0, -6.0 ];
*
* gfillNaN( 6, 0.0, x, 1, 0 );
* // x => [ 0.0, -2.0, 3.0, 0.0, 5.0, -6.0 ]
*/
function gfillNaN( N, alpha, x, strideX, offsetX ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		accessors( N, alpha, o, strideX, offsetX );
		return x;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( isnan( x[ ix ] ) ) {
			x[ ix ] = alpha;
		}
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gfillNaN;
