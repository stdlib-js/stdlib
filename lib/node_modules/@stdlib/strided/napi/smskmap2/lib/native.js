/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {integer} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - input array
* @param {integer} strideY - `y` stride length
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {Float32Array} z - destination array
* @param {integer} strideZ - `z` stride length
* @returns {Float32Array} `z`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float32Array( 10 );
* var y = new Float32Array( x.length );
* var m = new Uint8Array( x.length );
* var z = new Float32Array( x.length );
*
* wrapper( x.length, x, 1, y, 1, m, 1, z, 1 );
*/
function wrapper( N, x, strideX, y, strideY, mask, strideMask, z, strideZ ) {
	addon( N, x, strideX, y, strideY, mask, strideMask, z, strideZ );
	return z;
}


// EXPORTS //

module.exports = wrapper;
