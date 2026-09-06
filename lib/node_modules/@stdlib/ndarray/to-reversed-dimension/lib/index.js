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
* Return a new ndarray where the order of elements of an input ndarray along a specified dimension is reversed.
*
* @module @stdlib/ndarray/to-reversed-dimension
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var toReversedDimension = require( '@stdlib/ndarray/to-reversed-dimension' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = toReversedDimension( x );
* // returns <ndarray>[ [ 2.0, 1.0 ], [ 4.0, 3.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
