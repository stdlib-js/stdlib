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

var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
var offsetView = require( '@stdlib/strided/base/offset-view' );
var addon = require( './drev.native.js' );


// MAIN //

/**
* Reverses a double-precision floating-point strided array in-place.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
*
* drev( 3, x, 1, x.length-3 );
* // x => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
*/
function drev( N, x, stride, offset ) {
	var view;

	offset = minViewBufferIndex( N, stride, offset );

	view = offsetView( x, offset );

	addon( N, view, stride );
	return x;
}


// EXPORTS //

module.exports = drev;
