/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Create an uninitialized ndarray having the same shape and data type as a provided ndarray.
*
* @module @stdlib/ndarray/empty-like
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var emptyLike = require( '@stdlib/ndarray/empty-like' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns [ 2, 2 ]
*
* var dt = y.dtype;
* // returns 'float64'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
