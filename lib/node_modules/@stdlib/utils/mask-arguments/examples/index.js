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

var filledarrayBy = require( '@stdlib/array/filled-by' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );
var maskArguments = require( './../lib' );

function fill( i ) {
	return i;
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Create a mask array:
var mask = new Uint8Array( x.length );

// "Unmask" the first element:
mask[ 0 ] = 1;

// Compute the sum of consecutive elements...
var f;
var i;
for ( i = 1; i < x.length; i++ ) {
	// "Unmask" the next element:
	mask[ i ] = 1;

	// Compute the sum:
	f = maskArguments( add, mask );
	console.log( 'sum(x_%d, x_%d) = %d', i-1, i, f.apply( null, x ) );

	// Update the mask:
	mask[ i-1 ] = 0;
}
