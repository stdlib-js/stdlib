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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var findIndex = require( './../lib' );

// Define a callback function:
function isEven( v ) {
	return v % 2.0 === 0.0;
}

// Generate an array of random numbers:
var xbuf = discreteUniform( 10, 0, 20, {
	'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var opts = {
	'dim': 0
};

// Perform operation:
var idx = findIndex( x, opts, isEven );

// Print the results:
console.log( ndarray2array( idx ) );
