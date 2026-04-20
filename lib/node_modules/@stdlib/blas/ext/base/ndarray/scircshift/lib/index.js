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
* Circularly shift the elements of a one-dimensional single-precision floating-point ndarray by a specified number of positions.
*
* @module @stdlib/blas/ext/base/ndarray/scircshift
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var scircshift = require( '@stdlib/blas/ext/base/ndarray/scircshift' );
*
* var xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var k = scalar2ndarray( 2, {
*    'dtype': 'generic'
* });
*
* var out = scircshift( [ x, k ] );
* // returns <ndarray>[ 4.0, 5.0, 1.0, 2.0, 3.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
