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
* Reverse the order of elements along the last dimension of a two-dimensional nested input array.
*
* @module @stdlib/array/base/fliplr2d
*
* @example
* var fliplr = require( '@stdlib/array/base/fliplr2d' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
*
* var out = fliplr2d( x );
* // returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
