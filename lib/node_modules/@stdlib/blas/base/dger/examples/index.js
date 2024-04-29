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

/* eslint-disable */ // FIXME

'use strict';

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/zeros' );
var dger = require( './../lib' );

// var M = 4;
// var N = 3;
// var B = zeros( M*N, 'float64' );

// var opts = {
// 	'dtype': 'float64'
// };
// var x = discreteUniform( M, 0, 500, opts );
// console.log( x );

// var y = discreteUniform( N, 0, 255, opts );
// console.log( y );

// dger( 'row-major', N, M, 1.0, y, 1, x, 1, B, N );
// console.log( B );

var Float64Array = require( '@stdlib/array/float64' );

var M = 4;
var N = 3;
var B = zeros( M*N, 'float64' );

var x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
console.log( x );

var y = new Float64Array( [ 1.0, 4.0, 0.0 ] );
console.log( y );

dger( 'row-major', N, M, 1.0, y, 1, x, 1, B, M );
console.log( B );
