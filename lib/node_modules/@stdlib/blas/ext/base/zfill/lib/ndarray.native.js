/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
var offsetView = require( '@stdlib/strided/base/offset-view' );
var addon = require( './zfill.native.js' );


// MAIN //

/**
* Fills a double-precision complex floating-point strided array with a specified scalar constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {ComplexLike} alpha - scalar constant
* @param {Complex128Array} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Complex128Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var x = new Complex128Array( arr );
*
* var alpha = new Complex128( 10.0, 10.0 );
*
* zfill( x.length, alpha, x, 1, 0 );
*
* var y = x.get( 0 );
* // returns <Complex128>
*
* var re = real( y );
* // returns 10.0
*
* var im = imag( y );
* // returns 10.0
*/
function zfill( N, alpha, x, stride, offset ) {
	var view;
	offset = minViewBufferIndex( N, stride, offset );
	view = offsetView( x, offset );
	addon( N, alpha, view, stride );
	return x;
}


// EXPORTS //

module.exports = zfill;
