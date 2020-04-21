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
* Compute the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* @module @stdlib/blas/ext/base/gsumkbn2
*
* @example
* var gsumkbn2 = require( '@stdlib/blas/ext/base/gsumkbn2' );
*
* var x = [ 1.0, -2.0, 2.0 ];
* var N = x.length;
*
* var v = gsumkbn2( N, x, 1 );
* // returns 1.0
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var gsumkbn2 = require( '@stdlib/blas/ext/base/gsumkbn2' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var N = floor( x.length / 2 );
*
* var v = gsumkbn2.ndarray( N, x, 2, 1 );
* // returns 5.0
*/

// MODULES //

var gsumkbn2 = require( './main.js' );


// EXPORTS //

module.exports = gsumkbn2;
