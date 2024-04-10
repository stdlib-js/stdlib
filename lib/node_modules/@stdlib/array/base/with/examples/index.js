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
var arrayWith = require( './../lib' );

// Define an array:
var opts = {
	'dtype': 'generic'
};
var x = discreteUniform( 5, -100, 100, opts );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length-1, opts );

// Define an array with random values to set:
var values = discreteUniform( indices.length, -10000, 10000, opts );

// Randomly set elements in the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
	console.log( 'x = [%s]', arrayWith( x, indices[ i ], values[ i ] ).join( ',' ) );
}
