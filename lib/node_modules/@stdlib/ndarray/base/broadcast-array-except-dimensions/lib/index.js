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
* Broadcast an input ndarray to a target shape while keeping a list of specified dimensions unchanged.
*
* @module @stdlib/ndarray/base/broadcast-array-except-dimensions
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var broadcastArrayExceptDimensions = require( '@stdlib/ndarray/base/broadcast-array-except-dimensions' );
*
* var x = array( [ [ 1, 2, 3 ] ] );
* // returns <ndarray>
*
* var shx = getShape( x );
* // returns [ 1, 3 ]
*
* var y = broadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
* // returns <ndarray>
*
* var shy = getShape( y );
* // returns [ 2, 1, 3 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 0, 0, 2 );
* // returns 3
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 2 );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
