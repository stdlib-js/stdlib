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

var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var numel = require( '@stdlib/ndarray/base/numel' );
var Float32Array = require( '@stdlib/array/float32' );
var sgetrans = require( './../lib' );

var shapeA = [ 2, 3 ];
var shapeOut = [ 3, 2 ];

// Row-major layout...
var order = 'row-major';

var stridesA = shape2strides( shapeA, order );
var stridesOut = shape2strides( shapeOut, order );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

var out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[0], out, stridesOut[0] ); // eslint-disable-line max-len
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Column-major layout...
order = 'column-major';

stridesA = shape2strides( shapeA, order );
stridesOut = shape2strides( shapeOut, order );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[1], out, stridesOut[1] ); // eslint-disable-line max-len
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'row-major' );
stridesOut = shape2strides( shapeOut, 'column-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'row-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 ); // eslint-disable-line max-len
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'column-major' ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'column-major' );
stridesOut = shape2strides( shapeOut, 'row-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'column-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 ); // eslint-disable-line max-len
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'row-major' ) );
