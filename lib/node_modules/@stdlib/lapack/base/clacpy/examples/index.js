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

var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var uniform = require( '@stdlib/random/array/discrete-uniform' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var dlacpy = require( './../lib' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = new Complex64Array( uniform( 2*N, -10, 10, {
	'dtype': 'float32'
}));
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = new Complex64Array( uniform( 2*N, -10, 10, {
	'dtype': 'float32'
}));
console.log( ndarray2array( B, shape, strides, 0, order ) );

dlacpy( order, 'all', shape[ 0 ], shape[ 1 ], A, strides[ 0 ], B, strides[ 0 ] );
console.log( ndarray2array( B, shape, strides, 0, order ) );
