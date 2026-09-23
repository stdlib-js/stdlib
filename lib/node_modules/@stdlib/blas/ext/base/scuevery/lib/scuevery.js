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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Cumulatively tests whether every element in a single-precision floating-point strided array is truthy.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {BooleanArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {BooleanArray} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new Float32Array( [ 1.0, 1.0, 0.0, 0.0 ] );
* var out = new BooleanArray( 4 );
*
* scuevery( x.length, x, 1, out, 1 );
* // out => <BooleanArray>[ true, true, false, false ]
*/
function scuevery( N, x, strideX, out, strideOut ) {
	var ox = stride2offset( N, strideX );
	var oo = stride2offset( N, strideOut );
	return ndarray( N, x, strideX, ox, out, strideOut, oo );
}


// EXPORTS //

module.exports = scuevery;
