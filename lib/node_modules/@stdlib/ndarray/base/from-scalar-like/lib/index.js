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
* Convert a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @module @stdlib/ndarray/base/from-scalar-like
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
* var scalar2ndarrayLike = require( '@stdlib/ndarray/base/from-scalar-like' );
*
* var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'float64'
*
* var v = y.get();
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
