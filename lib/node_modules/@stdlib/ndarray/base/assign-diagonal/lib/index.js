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
* Assign elements from a broadcasted input ndarray to a specified diagonal of an output ndarray.
*
* @module @stdlib/ndarray/base/assign-diagonal
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zeros = require( '@stdlib/ndarray/zeros' );
* var assignDiagonal = require( '@stdlib/ndarray/base/assign-diagonal' );
*
* var x = scalar2ndarray( 1.0 );
* // returns <ndarray>
*
* var y = zeros( [ 3, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = assignDiagonal( [ x, y ], [ 0, 1 ], 0 );
* // returns <ndarray>[ [ 1.0, 0.0, 0.0 ], [ 0.0, 1.0, 0.0 ], [ 0.0, 0.0, 1.0 ] ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
