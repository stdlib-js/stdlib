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

/**
* BLAS level 1 routine to interchange two complex double-precision floating-point vectors.
*
* @module @stdlib/blas/base/zswap
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zswap = require( '@stdlib/blas/base/zswap' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* zswap( x.length, x, 1, y, 1 );
*
* var z = y.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zswap = require( '@stdlib/blas/base/zswap' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* zswap( x.length, x, 1, 0, y, 1, 0 );
*
* var z = y.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zswap;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zswap = main;
} else {
	zswap = tmp;
}


// EXPORTS //

module.exports = zswap;

// exports: { "ndarray": "zswap.ndarray" }
