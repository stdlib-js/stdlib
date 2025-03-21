/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var ctor = require( '@stdlib/ndarray/ctor' );
var bctor = require( '@stdlib/ndarray/base/ctor' );


// MAIN //

/**
* Returns a vector.
*
* @private
* @param {PositiveInteger} N - number of elements
* @param {boolean} bool - boolean indicating whether to create a low-level ndarray
* @returns {ndarray} vector
*/
function createVector( N, bool ) {
	var strides;
	var buffer;
	var shape;
	var f;

	if ( bool ) {
		f = bctor;
	} else {
		f = ctor;
	}
	buffer = new Float64Array( N );
	shape = [ N ];
	strides = [ 1 ];
	return f( 'float64', buffer, shape, strides, 0, 'row-major' );
}


// EXPORTS //

module.exports = createVector;
