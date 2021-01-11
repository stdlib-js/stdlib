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
* Compute the multiplicative inverse for each element in a double-precision floating-point strided array `x` according to a strided mask array and assign the results to elements in a double-precision floating-point strided array `y`.
*
* @module @stdlib/math/strided/special/dmskinv
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var dmskinv = require( '@stdlib/math/strided/special/dmskinv' );
*
* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dmskinv( x.length, x, 1, m, 1, y, 1 );
* // y => <Float64Array>[ -0.05, -1.0, 0.0, 0.25, 0.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var dmskinv = require( '@stdlib/math/strided/special/dmskinv' );
*
* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dmskinv.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ -0.05, -1.0, 0.0, 0.25, 0.0 ]
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
