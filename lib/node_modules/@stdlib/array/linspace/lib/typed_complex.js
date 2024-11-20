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

var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Generates a linearly spaced complex number sequence over a specified interval and assigns the results to a provided output array strided view.
*
* @private
* @param {(Float32Array|Float64Array)} out - output array strided view
* @param {string} dt1 - start value data type
* @param {(number|ComplexLike)} start - start of interval
* @param {string} dt2 - stop value data type
* @param {(number|ComplexLike)} stop - end of interval
* @param {NonNegativeInteger} len - length of output array
* @param {boolean} endpoint - boolean indicating whether to include `stop` in the output array
* @returns {(Float32Array|Float64Array)} complex number array view
*/
function linspace( out, dt1, start, dt2, stop, len, endpoint ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var dr;
	var di;
	var N;
	var i;
	var j;

	if ( len === 0 ) {
		return out;
	}
	if ( dt1 === 'float64' ) {
		re1 = start;
		im1 = 0.0;
	} else if ( dt1 === 'complex64' ) {
		re1 = realf( start );
		im1 = imagf( start );
	} else {
		re1 = real( start );
		im1 = imag( start );
	}
	if ( dt2 === 'float64' ) {
		re2 = stop;
		im2 = 0.0;
	} else if ( dt2 === 'complex64' ) {
		re2 = realf( stop );
		im2 = imagf( stop );
	} else {
		re2 = real( stop );
		im2 = imag( stop );
	}
	// Set the first value:
	if ( len === 1 ) {
		if ( endpoint ) {
			out[ 0 ] = re2;
			out[ 1 ] = im2;
		} else {
			out[ 0 ] = re1;
			out[ 1 ] = im1;
		}
		return out;
	}
	out[ 0 ] = re1;
	out[ 1 ] = im1;

	// Calculate the increments:
	if ( endpoint ) {
		N = len - 1;
	} else {
		N = len;
	}
	dr = ( re2-re1 ) / N;
	di = ( im2-im1 ) / N;

	// Generate linearly spaced complex numbers:
	j = 2;
	for ( i = 1; i < N; i++ ) {
		out[ j ] = re1 + (dr*i);
		out[ j+1 ] = im1 + (di*i);
		j += 2;
	}
	// Check whether to include the `stop` value in the output array:
	if ( endpoint ) {
		out[ j ] = re2;
		out[ j+1 ] = im2;
	}
	return out;
}


// EXPORTS //

module.exports = linspace;
