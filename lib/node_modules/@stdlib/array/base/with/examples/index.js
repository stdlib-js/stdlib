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
var rand = require( '@stdlib/random/base/randu' );
var withArray = require( './../lib' );
var indices;
var x;
var i;

// Define an array:
x = discreteUniform( 10, -100, 100 );

// Define an array containing random index values:
indices = discreteUniform( 100, -x.length, x.length-1 );

// Randomly selected values from the input array:
var index;
var newValue;
var updatedArray;
for ( i = 0; i < indices.length; i++ ) {
	index = indices[i];
	newValue = rand(); // Random value between -100 and 100

	updatedArray = withArray(x, index, newValue); // Update the value at the random index
	console.log('Updated x[%d] to %d', index, newValue);
	console.log('Updated array:', updatedArray);
}
