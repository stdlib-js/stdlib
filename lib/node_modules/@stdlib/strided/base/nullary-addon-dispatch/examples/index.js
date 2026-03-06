/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var dispatch = require( './../lib' ).ndarray;

function addon( N, dtypeX, x, strideX ) { // eslint-disable-line no-unused-vars
	console.log( x );
	// => <Float64Array>[ 3, 4 ]
}

function fallback( N, dtypeX, x, strideX, offsetX ) { // eslint-disable-line no-unused-vars
	console.log( x );
	// => [ 1, 2, 3, 4 ]
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// Create a strided array:
var x = new Float64Array( [ 1, 2, 3, 4 ] );

// Dispatch to the add-on function:
f( 2, 'float64', x, 1, 2 );

// Define a new strided array:
x = [ 1, 2, 3, 4 ];

// Dispatch to the fallback function:
f( 2, 'generic', x, 1, 2 );
