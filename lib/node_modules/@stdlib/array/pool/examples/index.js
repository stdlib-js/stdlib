/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var randu = require( '@stdlib/random/base/randu' );
var typedarraypool = require( './../lib' );

// Create a typed array pool which can allocate at most 1GB:
var typedarray = typedarraypool.factory({
	'highWaterMark': 1e9
});

// Inspect the pool:
console.log( 'Max bytes: %d', typedarray.highWaterMark );
console.log( 'nbytes: %d', typedarray.nbytes );

// Allocate an array for storing double-precision floating-point numbers:
var arr1 = typedarray( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );

// Fill the array...
var i;
for ( i = 0; i < arr1.length; i++ ) {
	arr1[ i ] = randu();
}

// Inspect array contents:
console.log( arr1 );

// Free the array:
typedarray.free( arr1 );

// Allocate another array similar to the previous one:
var arr2 = typedarray( 5, 'float64' );
// returns <Float64Array>

// Check that we have been returned a new typed array view:
console.log( arr2 === arr1 );
// => false

// Inspect array contents:
console.log( arr2 );

// Free the array:
typedarray.free( arr2 );

// Allocate an initialized array:
var arr3 = typedarray.calloc( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect array contents:
console.log( arr3 );

// Free the array:
typedarray.free( arr3 );

// Clear the pool:
typedarray.clear();

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );
