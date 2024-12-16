/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Apply a unary function to each element retrieved from a three-dimensional nested input array according to a callback function and assign results to elements in a three-dimensional nested output array.
*
* @module @stdlib/array/base/unary3d-by
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var unary3dBy = require( '@stdlib/array/base/unary3d-by' );
*
* function accessor( v ) {
*     return v - 2.0;
* }
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = zeros3d( shape );
*
* unary3dBy( [ x, y ], shape, scale, accessor );
*
* console.log( y );
* // => [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
