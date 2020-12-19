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

/**
* Add a constant to each strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.
*
* @module @stdlib/blas/ext/base/gapxsumkbn2
*
* @example
* var gapxsumkbn2 = require( '@stdlib/blas/ext/base/gapxsumkbn2' );
*
* var x = [ 1.0, -2.0, 2.0 ];
* var N = x.length;
*
* var v = gapxsumkbn2( N, 5.0, x, 1 );
* // returns 16.0
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var gapxsumkbn2 = require( '@stdlib/blas/ext/base/gapxsumkbn2' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var N = floor( x.length / 2 );
*
* var v = gapxsumkbn2.ndarray( N, 5.0, x, 2, 1 );
* // returns 25.0
*/

// MODULES //

var gapxsumkbn2 = require( './main.js' );


// EXPORTS //

module.exports = gapxsumkbn2;
