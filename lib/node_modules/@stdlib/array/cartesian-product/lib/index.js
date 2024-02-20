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
* Return the Cartesian product.
*
* @module @stdlib/array/cartesian-product
*
* @example
* var cartesianProduct = require( '@stdlib/array/cartesian-product' );
*
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = cartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/

// MAIN //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
