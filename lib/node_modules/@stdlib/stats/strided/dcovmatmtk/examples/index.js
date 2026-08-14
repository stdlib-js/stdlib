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

/* eslint-disable array-element-newline */

'use strict';

var Float64Array = require( '@stdlib/array/float64' );
var strided2array2d = require( '@stdlib/array/base/strided2array2d' );
var dcovmatmtk = require( './../lib' );

// Define a 4x3 matrix in which variables are stored along rows in row-major order:
var A = new Float64Array([
	1.0, -2.0, 2.0,
	2.0, -2.0, 1.0,
	2.0, -2.0, 1.0,
	1.0, -2.0, 2.0
]);

// Define a vector of known means:
var means = new Float64Array( [ 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 ] );

// Allocate a 4x4 output matrix:
var B = new Float64Array( 4*4 );

var out = dcovmatmtk.ndarray( 'rows', 'full', 4, 3, 1, means, 1, 0, A, 3, 1, 0, B, 4, 1, 0 );
// returns <Float64Array>[ ~4.33, ~3.83, ~3.83, ~4.33, ~3.83, ~4.33, ~4.33, ~3.83, ~3.83, ~4.33, ~4.33, ~3.83, ~4.33, ~3.83, ~3.83, ~4.33 ]

console.log( strided2array2d( out, [ 4, 4 ], [ 4, 1 ], 0 ) );
