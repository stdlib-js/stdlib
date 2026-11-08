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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {ComplexLike} start - starting value
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
*/
function cunitspace( N, start, x, strideX, offsetX ) {
	var view = reinterpret( x, 0 );
	addon.ndarray( N, start, view, strideX, offsetX );
	return x;
}


// EXPORTS //

module.exports = cunitspace;
