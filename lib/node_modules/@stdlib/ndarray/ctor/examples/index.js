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

var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( './../lib' );

// Create a data buffer:
var buffer = new Float32Array( (3*3*3*3) + 100 );

// Specify the array shape:
var shape = [ 3, 3, 3, 3 ];

// Specify the array strides:
var strides = [ 27, 9, 3, 1 ];

// Specify the index offset:
var offset = 4;

// Specify the order:
var order = 'row-major'; // C-style

// Create a new ndarray:
var arr = ndarray( 'float32', buffer, shape, strides, offset, order );

// Retrieve an array value:
var v = arr.get( 1, 2, 1, 2 );
console.log( v );
// => 0.0

// Set an array value:
arr.set( 1, 2, 1, 2, 10.0 );

// Retrieve the array value:
v = arr.get( 1, 2, 1, 2 );
console.log( v );
// => 10.0

// Serialize the array as a string:
console.log( arr.toString() );
// => "ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 3, 3, 3, 3 ], [ 27, 9, 3, 1 ], 0, 'row-major' )"

// Serialize the array as JSON:
console.log( JSON.stringify( arr.toJSON() ) );
// => '{"type":"ndarray","dtype":"float32","flags":{},"order":"row-major","shape":[3,3,3,3],"strides":[27,9,3,1],"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}'
