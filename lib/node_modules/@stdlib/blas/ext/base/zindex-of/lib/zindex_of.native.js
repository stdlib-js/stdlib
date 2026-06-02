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
* Returns the first index of a specified search element in a double-precision complex floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} searchElement - search element
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @returns {integer} index
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var idx = zindexOf( x.length, new Complex128( 3.0, 4.0 ), x, 1 );
* // returns 1
*/
function zindexOf( N, searchElement, x, strideX ) {
	var view = reinterpret( x, 0 );
	return addon( N, searchElement, view, strideX );
}


// EXPORTS //

module.exports = zindexOf;
