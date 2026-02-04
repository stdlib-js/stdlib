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

var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var dataBuffer = require( '@stdlib/ndarray/base/data-buffer' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of all elements in a one-dimensional single-precision floating-point ndarray.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var x = ndarray( 'float32', buffer, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var out = ssum( [ x ] );
* // returns 1.0
*/
function ssum( arrays ) {
	var x = arrays[ 0 ];
	return addon( dataBuffer( x ), serialize( x ) );
}


// EXPORTS //

module.exports = ssum;
