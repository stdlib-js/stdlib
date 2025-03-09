/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Computes the L2-norm of a vector.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} L2-norm
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var z = gnrm2( 4, arraylike2object( toAccessorArray( x ) ), 2, 1 );
* // returns 5.0
*/
function gnrm2( N, x, stride, offset ) {
	var scale;
	var buf;
	var get;
	var ssq;
	var ax;
	var ix;
	var i;

	buf = x.data;
	get = x.accessors[ 0 ];

	ix = offset;
	if ( N === 1 ) {
		return abs( get( buf, ix ) );
	}
	if ( stride === 0 ) {
		return sqrt( N ) * abs( get( buf, ix ) );
	}
	scale = 0.0;
	ssq = 1.0;
	for ( i = 0; i < N; i++ ) {
		if ( get( buf, ix ) !== 0.0 ) {
			ax = abs( get( buf, ix ) );
			if ( scale < ax ) {
				ssq = 1.0 + ( ssq * pow( scale/ax, 2 ) );
				scale = ax;
			} else {
				ssq += pow( ax/scale, 2 );
			}
		}
		ix += stride;
	}
	return scale * sqrt( ssq );
}


// EXPORTS //

module.exports = gnrm2;
