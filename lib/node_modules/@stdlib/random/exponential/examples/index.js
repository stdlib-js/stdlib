/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var logEach = require( '@stdlib/console/log-each' );
var toArray = require( '@stdlib/ndarray/to-array' );
var exponential = require( './../lib' );

// Create a function for generating random arrays originating from the same state:
var random = exponential.factory({
	'state': exponential.state,
	'copy': true
});

// Generate 3 one-dimensional arrays:
var x1 = random( [ 5 ], 2.0 );
var x2 = random( [ 5 ], 2.0 );
var x3 = random( [ 5 ], 2.0 );

// Print the contents:
logEach( '%f, %f, %f', toArray( x1 ), toArray( x2 ), toArray( x3 ) );

// Create another function for generating random arrays with the original state:
random = exponential.factory({
	'state': exponential.state,
	'copy': true
});

// Generate a two-dimensional array which replicates the above pseudorandom number generation sequence:
var x4 = random( [ 3, 5 ], 2.0 );

// Convert to a list of nested arrays:
var arr = toArray( x4 );

// Print the contents:
console.log( '' );
logEach( '%f, %f, %f', arr[ 0 ], arr[ 1 ], arr[ 2 ] );
