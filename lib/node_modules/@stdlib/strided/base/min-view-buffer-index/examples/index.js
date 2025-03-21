/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var minViewBufferIndex = require( './../lib' );

// Generate a random number of indexed elements:
var N = discreteUniform( 10, 20 );

// Generate a random stride length:
var stride = discreteUniform( -10, 10 );

// Generate a random offset:
var offset = discreteUniform( 0, 100 ) + ( ( stride < 0 ) ? (1-N)*stride : 0 );

// Compute the minimum accessible index:
var idx = minViewBufferIndex( N, stride, offset );

console.log( 'N: %d, stride: %d, offset: %d => %d', N, stride, offset, idx );
