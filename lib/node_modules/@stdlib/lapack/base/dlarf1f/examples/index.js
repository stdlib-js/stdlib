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

var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var dlarf1f = require( './../lib' );

// Specify matrix meta data:
var shape = [ 4, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

// Create a matrix stored in linear memory:
var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] ); // eslint-disable-line max-len
console.log( ndarray2array( C, shape, strides, 0, order ) );

// Define the vector `v` and a workspace array:
var V = new Float64Array( [ 0.5, 0.4, 0.3, 0.2 ] );
var work = new Float64Array( 3 );

// Apply the elementary reflector:
dlarf1f( order, 'left', shape[ 0 ], shape[ 1 ], V, -1, 1.0, C, strides[ 0 ], work );
console.log( ndarray2array( C, shape, strides, 0, order ) );
