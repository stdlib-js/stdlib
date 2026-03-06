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
* Take elements from a two-dimensional nested array.
*
* @module @stdlib/array/base/take2d
*
* @example
* var take2d = require( '@stdlib/array/base/take2d' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var indices = [ 1, 1, 0, 0, -1, -1 ];
*
* var y = take2d( x, indices, 1, 'normalize' );
* // returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
