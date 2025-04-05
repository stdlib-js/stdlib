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
* Take elements from two indexed arrays in a single pass.
*
* @module @stdlib/array/base/take-indexed2
*
* @example
* var take2 = require( '@stdlib/array/base/take-indexed2' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var out = take2( x, y, indices );
* // returns [ [ 4, 2, 3, 1 ], [ 8, 6, 7, 5 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
