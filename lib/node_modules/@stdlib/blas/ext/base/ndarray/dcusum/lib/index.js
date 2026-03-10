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
* Compute the cumulative sum of a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/dcusum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
* var dcusum = require( '@stdlib/blas/ext/base/ndarray/dcusum' );
*
* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var initial = scalar2ndarray( 0.0, 'float64', 'row-major' );
*
* var v = dcusum( [ x, y, initial ] );
* // returns <ndarray>[ 1.0, 4.0, 8.0, 10.0 ]
*
* var bool = ( v === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
