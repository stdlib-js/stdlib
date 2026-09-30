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
* Return an ndarray created by repeating the elements of an input ndarray a specified number of times along each dimension.
*
* @module @stdlib/ndarray/base/tile
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var tile = require( '@stdlib/ndarray/base/tile' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = tile( x, [ 2, 2 ] );
* // returns <ndarray>[ [ 1, 2, 1, 2 ], [ 3, 4, 3, 4 ], [ 1, 2, 1, 2 ], [ 3, 4, 3, 4 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
