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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {ComplexLike} start - starting value
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zunitspace( x.length, new Complex128( 3.0, 0.0 ), x, 1 );
* // x => <Complex128Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
*/
function zunitspace( N, start, x, strideX ) {
	var view = reinterpret( x, 0 );
	addon( N, start, view, strideX );
	return x;
}


// EXPORTS //

module.exports = zunitspace;
