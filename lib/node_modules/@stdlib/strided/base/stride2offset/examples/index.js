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
var stride2offset = require( './../lib' );

var opts = {
	'dtype': 'generic'
};

// Define the number of indexed elements:
var N = 100;

// Define a maximum stride length:
var maxStride = 10;

// Create an array of random integers which can accommodate the maximum stride length:
var arr = discreteUniform( N*maxStride, 0, 255, opts );

// Generate random stride lengths:
var strides = discreteUniform( 10, -maxStride, maxStride, opts );

// Resolve values in the data array for the first indexed element based on various stride lengths...
var offset;
var i;
for ( i = 0; i < strides.length; i++ ) {
	offset = stride2offset( N, strides[ i ] );
	console.log( 'stride = %d. arr[%d] = %d.', strides[ i ], offset, arr[ offset ] );
}
