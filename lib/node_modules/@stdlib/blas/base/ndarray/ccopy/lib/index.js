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

/**
* BLAS level 1 routine to copy values from a one-dimensional single-precision complex floating-point ndarray `x` into a one-dimensional single-precision complex floating-point ndarray `y`.
*
* @module @stdlib/blas/base/ndarray/ccopy
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var ccopy = require( '@stdlib/blas/base/ndarray/ccopy' );
*
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new ndarray( 'complex64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var y = new ndarray( 'complex64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var z = ccopy( [ x, y ] );
* // returns <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ], <Complex64>[ 5.0, 6.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
