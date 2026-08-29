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

var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Cumulatively tests whether every element in a double-precision floating-point strided array is truthy.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {BooleanArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {BooleanArray} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new Float64Array( [ 1.0, 1.0, 0.0, 0.0 ] );
* var out = new BooleanArray( 4 );
*
* dcuevery( x.length, x, 1, out, 1 );
* // out => <BooleanArray>[ true, true, false, false ]
*/
function dcuevery( N, x, strideX, out, strideOut ) {
	addon( N, x, strideX, reinterpretBoolean( out, 0 ), strideOut );
	return out;
}


// EXPORTS //

module.exports = dcuevery;
