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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var toNormalizedIndices = require( './../lib' );

// Generate a list of random indices:
var idx = discreteUniform( 100, -20, 20, {
	'dtype': 'generic'
});

// Normalize each index to the interval `[0, 15]`:
var out = toNormalizedIndices( idx, 15 );

// Print the results...
var i;
for ( i = 0; i < idx.length; i++ ) {
	console.log( '%d => [%d, %d] => %d', idx[ i ], 0, 15, out[ i ] );
}
