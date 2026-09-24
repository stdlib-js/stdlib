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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ctriu2tril = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var shape = [ 5, 8 ];
var abuf = discreteUniform( shape[ 0 ]*shape[ 1 ]*2, -50, 50, opts );
var A = new Complex64Matrix( abuf.buffer, 0, shape[ 0 ], shape[ 1 ] );
console.log( ndarray2array( A ) );

var shapeB = [ shape[ 1 ], shape[ 0 ] ];
var bbuf = discreteUniform( shapeB[ 0 ]*shapeB[ 1 ]*2, -50, 50, opts );
var B = new Complex64Matrix( bbuf.buffer, 0, shapeB[ 0 ], shapeB[ 1 ] );
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
	'dtype': 'generic'
});

var out = ctriu2tril( [ A, B, k ] );
console.log( ndarray2array( out ) );
