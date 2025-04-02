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
* Apply a quaternary callback to elements in four broadcasted input arrays and assign results to elements in a three-dimensional nested output array.
*
* @module @stdlib/array/base/broadcasted-quaternary3d
*
* @example
* var add = require( '@stdlib/number/float64/base/add4' );
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var bquaternary3d = require( '@stdlib/array/base/broadcasted-quaternary3d' );
*
* var shapes = [
*     [ 1, 1, 3 ],
*     [ 3, 1, 1 ],
*     [ 1, 3, 1 ],
*     [ 3, 3, 3 ],
*     [ 3, 3, 3 ]
* ];
*
* var x = ones3d( shapes[ 0 ] );
* var y = ones3d( shapes[ 1 ] );
* var z = ones3d( shapes[ 2 ] );
* var w = ones3d( shapes[ 3 ] );
* var out = zeros3d( shapes[ 4 ] );
*
* bquaternary3d( [ x, y, z, w, out ], shapes, add );
*
* console.log( out );
* // => [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
