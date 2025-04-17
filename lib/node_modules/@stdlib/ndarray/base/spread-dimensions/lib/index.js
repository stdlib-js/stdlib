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
* Expand the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.
*
* @module @stdlib/ndarray/base/spread-dimensions
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var spreadDimensions = require( '@stdlib/ndarray/base/spread-dimensions' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = spreadDimensions( 5, x, [ 1, 3 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 1, 2, 1, 2, 1 ]
*
* var v = y.get( 0, 0, 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 0, 1, 0 );
* // returns 2
*
* v = y.get( 0, 1, 0, 0, 0 );
* // returns 3
*
* v = y.get( 0, 1, 0, 1, 0 );
* // returns 4
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
