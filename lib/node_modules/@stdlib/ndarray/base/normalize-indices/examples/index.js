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
var normalizeIndices = require( './../lib' );

// Generate a list of random indices:
var idx1 = discreteUniform( 100, -20, 20, {
	'dtype': 'generic'
});

// Normalize each index to the interval `[0, 15]`:
var idx2 = idx1.slice();
var out = normalizeIndices( idx2, 15 );

// Check whether one or more indices was invalid:
if ( out === null ) {
	console.log( 'One or more indices was invalid.' );
}

// Print the results...
var i;
for ( i = 0; i < idx1.length; i++ ) {
	console.log( '%d => [%d, %d] => %d', idx1[ i ], 0, 15, idx2[ i ] );
}
