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

var Float32Array = require( '@stdlib/array/float32' );
var Uint32Array = require( '@stdlib/array/uint32' );


// VARIABLES //

var FLOAT32_VIEW = new Float32Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT32_VIEW.buffer );

// 0x7fffffff = 2147483647 => 0 11111111111 11111111111111111111
var ABS_MASK = 0x7fffffff>>>0; // asm type annotation


// MAIN //

/**
* Computes the absolute value of a single-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} absolute value
*
* @example
* var v = absf( -1.0 );
* // returns 1.0
*
* @example
* var v = absf( 2.0 );
* // returns 2.0
*
* @example
* var v = absf( 0.0 );
* // returns 0.0
*
* @example
* var v = absf( -0.0 );
* // returns 0.0
*
* @example
* var v = absf( NaN );
* // returns NaN
*/
function absf( x ) {
	FLOAT32_VIEW[ 0 ] = x;
	UINT32_VIEW[ 0 ] &= ABS_MASK;
	return FLOAT32_VIEW[ 0 ];
}


// EXPORTS //

module.exports = absf;
