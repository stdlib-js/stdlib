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
* Apply a ternary callback to elements in three three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.
*
* @module @stdlib/array/base/ternary3d
*
* @example
* var add = require( '@stdlib/number/float64/base/add3' );
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var ternary3d = require( '@stdlib/array/base/ternary3d' );
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = ones3d( shape );
* var z = ones3d( shape );
* var out = zeros3d( shape );
*
* ternary3d( [ x, y, z, out ], shape, add );
*
* console.log( out );
* // => [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
