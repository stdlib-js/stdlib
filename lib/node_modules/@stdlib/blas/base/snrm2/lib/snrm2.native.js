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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the L2-norm of a single-precision floating-point vector.
*
* @param {PositiveInteger} N - number of values over which to compute the L2-norm
* @param {Float32Array} x - input array
* @param {PositiveInteger} stride - stride length
* @returns {number} L2-norm of `x`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var N = 3;
*
* var z = snrm2( N, x, 1 );
* // returns 3.0
*/
function snrm2( N, x, stride ) {
	return addon( N, x, stride );
}


// EXPORTS //

module.exports = snrm2;
