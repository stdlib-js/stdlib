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
* Broadcast an ndarray to a specified shape while keeping a list of specified dimensions unchanged if and only if the specified shape differs from the provided ndarray's shape.
*
* @module @stdlib/ndarray/base/maybe-broadcast-array-except-dimensions
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var maybeBroadcastArrayExceptDimensions = require( '@stdlib/ndarray/base/maybe-broadcast-array-except-dimensions' );
*
* var x = array( [ [ 1, 2, 3 ] ] );
* // returns <ndarray>[ [ 1, 2, 3 ] ]
*
* var y = maybeBroadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
* // returns <ndarray>[ [ [ 1, 2, 3 ] ], [ [ 1, 2, 3 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
