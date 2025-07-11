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
* Apply a quinary callback to elements in five three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.
*
* @module @stdlib/array/base/quinary3d
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var add = require( '@stdlib/number/float64/base/add5' );
* var quinary3d = require( '@stdlib/array/base/quinary3d' );
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = ones3d( shape );
* var z = ones3d( shape );
* var w = ones3d( shape );
* var v = ones3d( shape );
* var out = zeros3d( shape );
*
* quinary3d( [ x, y, z, w, v, out ], shape, add );
*
* console.log( out );
* // => [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
