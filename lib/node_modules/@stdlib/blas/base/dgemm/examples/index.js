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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dgemm = require( './../lib' );

var opts = {
	'dtype': 'float64'
};

var M = 3;
var N = 4;
var K = 2;

var A = discreteUniform( M*K, 0, 10, opts ); // 3x2
var B = discreteUniform( K*N, 0, 10, opts ); // 2x4
var C = discreteUniform( M*N, 0, 10, opts ); // 3x4

dgemm( 'row-major', 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, B, N, 1.0, C, N );
console.log( C );

dgemm.ndarray( 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, 1, 0, B, N, 1, 0, 1.0, C, N, 1, 0 );
console.log( C );
