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
* Sort a one-dimensional single-precision floating-point ndarray using heapsort.
*
* @module @stdlib/blas/ext/base/ndarray/ssorthp
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ssorthp = require( '@stdlib/blas/ext/base/ndarray/ssorthp' );
*
* var xbuf = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ord = scalar2ndarray( 1.0, {
*    'dtype': 'generic'
* });
*
* var out = ssorthp( [ x, ord ] );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -4.0, -2.0, 1.0, 3.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
