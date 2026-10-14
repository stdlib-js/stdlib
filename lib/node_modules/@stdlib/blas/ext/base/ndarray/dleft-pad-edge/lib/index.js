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
* Prepend elements to a one-dimensional double-precision floating-point input ndarray by repeating the leading edge element and write the results to a one-dimensional double-precision floating-point output ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/dleft-pad-edge
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dleftPadEdge = require( '@stdlib/blas/ext/base/ndarray/dleft-pad-edge' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var k = scalar2ndarray( 6, {
*     'dtype': 'generic'
* });
*
* var z = dleftPadEdge( [ x, y, k ] );
* // returns <ndarray>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
