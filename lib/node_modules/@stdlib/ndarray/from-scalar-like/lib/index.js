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
* Convert a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @module @stdlib/ndarray/from-scalar-like
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var array = require( '@stdlib/ndarray/array' );
* var scalar2ndarrayLike = require( '@stdlib/ndarray/from-scalar-like' );
*
* var x = array( [ 1.0, 2.0, 3.0 ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0 ]
*
* var out = scalar2ndarrayLike( x, 1.0, {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'float64'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
