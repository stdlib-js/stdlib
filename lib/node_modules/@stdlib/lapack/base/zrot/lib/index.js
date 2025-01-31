/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* LAPACK auxiliary routine to apply a plane rotation with real cosine and complex sine.
*
* @module @stdlib/lapack/base/zrot
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zrot = require( '@stdlib/lapack/base/zrot' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex128( 0.6, 0 );
*
* zrot( zx.length, zx, 1, zy, 1, 0.8, s );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns ~-0.6
*
* var im = imag( z );
* // returns ~-1.2
*
* z = zx.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns ~0.8
*
* im = imag( z );
* // returns ~1.6
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zrot = require( '@stdlib/lapack/base/zrot' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex128( 0.6, 0 );
*
* zrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, s );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns ~-0.6
*
* var im = imag( z );
* // returns ~-1.2
*
* z = zx.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns ~0.8
*
* im = imag( z );
* // returns ~1.6
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zrot;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zrot = main;
} else {
	zrot = tmp;
}


// EXPORTS //

module.exports = zrot;

// exports: { "ndarray": "zrot.ndarray" }
