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
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dcusum = require( '@stdlib/blas/ext/base/ndarray/dcusum' );
*
* var x = new Float64Vector( [ 1.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var initial = scalar2ndarray( 0.0, {
*     'dtype': 'float64'
* });
*
* var z = dcusum( [ x, y, initial ] );
* // returns <ndarray>[ 1.0, 4.0, 8.0, 10.0 ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
