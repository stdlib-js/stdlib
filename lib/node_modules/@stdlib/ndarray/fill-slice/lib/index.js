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
* Fill an input ndarray view with a specified value.
*
* @module @stdlib/ndarray/fill-slice
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var fillSlice = require( '@stdlib/ndarray/fill-slice' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'float64'
* });
*
* // Define the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
* var s = new MultiSlice( s0, s1 );
*
* // Fill a slice with a scalar value:
* var y = fillSlice( x, 5.0, s );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0 ], [ 0, 0, 5, 5 ], [ 0, 0, 5, 5 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
