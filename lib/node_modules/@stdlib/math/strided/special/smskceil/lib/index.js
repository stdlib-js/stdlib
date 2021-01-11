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

/**
* Round each element in a single-precision floating-point strided array `x` toward positive infinity according to a strided mask array and assign the results to elements in a single-precision floating-point strided array `y`.
*
* @module @stdlib/math/strided/special/smskceil
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var smskceil = require( '@stdlib/math/strided/special/smskceil' );
*
* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smskceil( x.length, x, 1, m, 1, y, 1 );
* // y => <Float32Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var smskceil = require( '@stdlib/math/strided/special/smskceil' );
*
* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smskceil.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var main = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	main = tmp;
}


// EXPORTS //

module.exports = main;
