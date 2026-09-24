/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var uniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Array = require( '@stdlib/array/complex128' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ztril2triu = require( './../lib' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var opts = {
	'dtype': 'float64'
};
var A = new Complex128Array( uniform( N*2, -10, 10, opts ) );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = new Complex128Array( uniform( N*2, -10, 10, opts ) );
var shapeB = [ shape[ 1 ], shape[ 0 ] ];
var stridesB = shape2strides( shapeB, order );
console.log( ndarray2array( B, shapeB, stridesB, 0, order ) );

ztril2triu( order, shape[ 0 ], shape[ 1 ], 0, A, strides[ 0 ], B, stridesB[ 0 ] );
console.log( ndarray2array( B, shapeB, stridesB, 0, order ) );
